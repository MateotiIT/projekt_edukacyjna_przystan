const CONTACT_FORM_REGEX = /^(\+?\d[\d\s-]{8,}|[^\s@]+@[^\s@]+\.[^\s@]+)$/;

function validateContactForm(form) {
  let valid = true;

  const name = form.name.value.trim();
  const contact = form.contact.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    setFieldError("contact-name", "Podaj imię i nazwisko.");
    valid = false;
  } else {
    setFieldError("contact-name", "");
  }

  if (!contact || !CONTACT_FORM_REGEX.test(contact)) {
    setFieldError("contact-contact", "Podaj poprawny e-mail lub numer telefonu.");
    valid = false;
  } else {
    setFieldError("contact-contact", "");
  }

  if (!message) {
    setFieldError("contact-message", "Napisz kilka słów wiadomości.");
    valid = false;
  } else {
    setFieldError("contact-message", "");
  }

  return valid;
}

function setContactFormState(state) {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("contact-form-submit");
  const errorBox = document.getElementById("contact-form-error");
  const successBox = document.getElementById("contact-form-success");

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
      submitBtn.textContent = "Wyślij wiadomość";
      errorBox.textContent = "Coś poszło nie tak, spróbuj ponownie lub zadzwoń do nas.";
      errorBox.hidden = false;
      break;
    default:
      submitBtn.disabled = false;
      submitBtn.textContent = "Wyślij wiadomość";
      errorBox.hidden = true;
      break;
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;

  if (!validateContactForm(form)) return;

  setContactFormState("sending");

  const name = form.name.value.trim();
  const contact = form.contact.value.trim();
  const message = form.message.value.trim();

  // Pola współdzielonego szablonu powiadomień "do mnie" (patrz email-templates/powiadomienie-admin.html).
  // Formularz kontaktowy wysyła wyłącznie do administratora - bez potwierdzenia do nadawcy.
  const templateParams = {
    subject: `Nowa wiadomość od ${name} (formularz kontaktowy)`,
    badge: "Nowa wiadomość z formularza kontaktowego",
    title: name,
    reply_to: contact,
    content: `Kontakt: ${contact}\n\nWiadomość:\n${message}`,
  };

  if (typeof emailjs === "undefined") {
    setContactFormState("error");
    return;
  }

  Promise.resolve()
    .then(() => emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams))
    .then(() => setContactFormState("success"))
    .catch(() => setContactFormState("error"));
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", handleContactSubmit);
}
