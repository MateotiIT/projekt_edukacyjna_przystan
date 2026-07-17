const PHONE_REGEX = /^\+?\d[\d\s-]{8,}$/;
const EMAIL_ONLY_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NO_TERM_LABEL = "Brak wybranego terminu - ustalimy go indywidualnie telefonicznie.";

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const wrapper = field ? field.closest(".form-field") : null;
  if (!wrapper) return;

  const errorEl = wrapper.querySelector(".field-error");
  wrapper.classList.toggle("has-error", Boolean(message));
  if (errorEl) errorEl.textContent = message || "";
}

function validateForm(form) {
  let valid = true;

  const childName = form.child_name.value.trim();
  const childClass = form.child_class.value;
  const parentName = form.parent_name.value.trim();
  const parentPhone = form.parent_phone.value.trim();
  const parentContact = form.parent_contact.value.trim();

  if (!childName) {
    setFieldError("child-name", "Podaj imię dziecka.");
    valid = false;
  } else {
    setFieldError("child-name", "");
  }

  if (!childClass) {
    setFieldError("child-class", "Wybierz klasę dziecka.");
    valid = false;
  } else {
    setFieldError("child-class", "");
  }

  const hasScheduleOptions = document.querySelectorAll(
    '#modal-course-schedule input[name="selected_term"]'
  ).length > 0;
  if (hasScheduleOptions && !form.selected_term.value) {
    setFieldError("schedule-field", "Wybierz jeden z dostępnych terminów.");
    valid = false;
  } else {
    setFieldError("schedule-field", "");
  }

  if (!parentName) {
    setFieldError("parent-name", "Podaj imię i nazwisko rodzica.");
    valid = false;
  } else {
    setFieldError("parent-name", "");
  }

  if (!parentPhone || !PHONE_REGEX.test(parentPhone)) {
    setFieldError("parent-phone", "Podaj poprawny numer telefonu.");
    valid = false;
  } else {
    setFieldError("parent-phone", "");
  }

  if (!parentContact || !EMAIL_ONLY_REGEX.test(parentContact)) {
    setFieldError("parent-contact", "Podaj poprawny adres e-mail.");
    valid = false;
  } else {
    setFieldError("parent-contact", "");
  }

  if (!form.terms_accept.checked) {
    setFieldError("terms-accept", "Musisz zaakceptować regulamin, aby wysłać zgłoszenie.");
    valid = false;
  } else {
    setFieldError("terms-accept", "");
  }

  return valid;
}

function setFormState(state) {
  const form = document.getElementById("signup-form");
  const submitBtn = document.getElementById("form-submit");
  const errorBox = document.getElementById("form-error");
  const successBox = document.getElementById("form-success");

  if (!form || !submitBtn || !errorBox || !successBox) return;

  switch (state) {
    case "sending":
      submitBtn.disabled = true;
      submitBtn.textContent = "Wysyłanie...";
      errorBox.hidden = true;
      break;
    case "success":
      form.hidden = true;
      successBox.hidden = false;
      break;
    case "error":
      submitBtn.disabled = false;
      submitBtn.textContent = "Wyślij zgłoszenie";
      errorBox.textContent = "Coś poszło nie tak, spróbuj ponownie lub zadzwoń do nas.";
      errorBox.hidden = false;
      break;
    default:
      submitBtn.disabled = false;
      submitBtn.textContent = "Wyślij zgłoszenie";
      errorBox.hidden = true;
      break;
  }
}

function resetFormState() {
  const form = document.getElementById("signup-form");
  const successBox = document.getElementById("form-success");
  const errorBox = document.getElementById("form-error");

  if (form) {
    form.reset();
    form.hidden = false;
    ["child-name", "child-class", "schedule-field", "parent-name", "parent-phone", "parent-contact", "terms-accept"].forEach((id) =>
      setFieldError(id, "")
    );
  }
  if (successBox) successBox.hidden = true;
  if (errorBox) errorBox.hidden = true;
  setFormState("idle");
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (!validateForm(form)) return;

  setFormState("sending");

  const childClassOption = CHILD_CLASS_OPTIONS.find((option) => option.value === form.child_class.value);
  const courseTitle = document.getElementById("modal-course-name").textContent;
  const parentContact = form.parent_contact.value.trim();
  const parentName = form.parent_name.value.trim();
  const childName = form.child_name.value.trim();
  const childClassLabel = childClassOption ? childClassOption.label : form.child_class.value;
  const selectedTerm = (form.selected_term ? form.selected_term.value : "") || NO_TERM_LABEL;

  const templateParams = {
    // Pola współdzielonego szablonu powiadomień "do mnie" (patrz email-templates/powiadomienie-admin.html).
    subject: `Nowe zgłoszenie: ${courseTitle} — ${childName}`,
    badge: "Nowe zgłoszenie na zajęcia",
    title: courseTitle,
    reply_to: parentContact,
    content:
      `Dziecko: ${childName} (${childClassLabel})\n` +
      `Termin: ${selectedTerm}\n` +
      `Rodzic/opiekun: ${parentName}\n` +
      `Telefon: ${form.parent_phone.value.trim()}\n` +
      `E-mail: ${parentContact}\n` +
      `Regulamin zaakceptowany: ${form.terms_accept.checked ? "tak" : "nie"}\n` +
      `ID zajęć: ${form.course_id.value}`,

    // Pola szablonu potwierdzenia "do rodzica" (patrz email-templates/zgloszenie-rodzic-potwierdzenie.html).
    course_title: courseTitle,
    child_name: childName,
    child_class: childClassLabel,
    selected_term: selectedTerm,
    parent_name: parentName,
    to_email: parentContact,
  };

  if (typeof emailjs === "undefined") {
    setFormState("error");
    return;
  }

  emailjs
    .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
    .then(() => {
      setFormState("success");
      // Potwierdzenie do rodzica jest "best effort" - jego ewentualny błąd nie cofa
      // już pokazanego sukcesu, bo zgłoszenie dotarło tam gdzie najważniejsze - do nas.
      if (templateParams.to_email) {
        emailjs
          .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.autoreplyTemplateId, templateParams)
          .catch(() => {});
      }
    })
    .catch(() => setFormState("error"));
}

function initSignupForm() {
  const form = document.getElementById("signup-form");
  if (!form) return;
  form.addEventListener("submit", handleSubmit);
}
