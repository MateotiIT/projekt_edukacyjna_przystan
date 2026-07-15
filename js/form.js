const CONTACT_REGEX = /^(\+?\d[\d\s-]{8,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;
const PHONE_REGEX = /^\+?\d[\d\s-]{8,}$/;

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

  if (!parentContact || !CONTACT_REGEX.test(parentContact)) {
    setFieldError("parent-contact", "Podaj poprawny e-mail lub numer telefonu.");
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

  const templateParams = {
    course_title: document.getElementById("modal-course-name").textContent,
    course_id: form.course_id.value,
    child_name: form.child_name.value.trim(),
    child_class: childClassOption ? childClassOption.label : form.child_class.value,
    selected_term: form.selected_term ? form.selected_term.value : "",
    parent_name: form.parent_name.value.trim(),
    parent_phone: form.parent_phone.value.trim(),
    parent_contact: form.parent_contact.value.trim(),
    terms_accepted: form.terms_accept.checked ? "tak" : "nie",
  };

  if (typeof emailjs === "undefined") {
    setFormState("error");
    return;
  }

  Promise.resolve()
    .then(() => emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams))
    .then(() => setFormState("success"))
    .catch(() => setFormState("error"));
}

function initSignupForm() {
  const form = document.getElementById("signup-form");
  if (!form) return;
  form.addEventListener("submit", handleSubmit);
}
