const CONTACT_REGEX = /^(\+?\d[\d\s-]{8,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

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
  const childAge = Number(form.child_age.value);
  const parentName = form.parent_name.value.trim();
  const parentContact = form.parent_contact.value.trim();

  if (!childName) {
    setFieldError("child-name", "Podaj imię dziecka.");
    valid = false;
  } else {
    setFieldError("child-name", "");
  }

  if (!form.child_age.value || Number.isNaN(childAge) || childAge < 4 || childAge > 19) {
    setFieldError("child-age", "Podaj wiek dziecka (4-19 lat).");
    valid = false;
  } else {
    setFieldError("child-age", "");
  }

  if (!parentName) {
    setFieldError("parent-name", "Podaj imię i nazwisko rodzica.");
    valid = false;
  } else {
    setFieldError("parent-name", "");
  }

  if (!parentContact || !CONTACT_REGEX.test(parentContact)) {
    setFieldError("parent-contact", "Podaj poprawny e-mail lub numer telefonu.");
    valid = false;
  } else {
    setFieldError("parent-contact", "");
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
    ["child-name", "child-age", "parent-name", "parent-contact"].forEach((id) =>
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

  const templateParams = {
    course_title: document.getElementById("modal-course-name").textContent,
    course_id: form.course_id.value,
    child_name: form.child_name.value.trim(),
    child_age: form.child_age.value,
    parent_name: form.parent_name.value.trim(),
    parent_contact: form.parent_contact.value.trim(),
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
