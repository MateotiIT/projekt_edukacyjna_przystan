// === Konfiguracja EmailJS ===
// 1. Załóż darmowe konto na https://www.emailjs.com/
// 2. Dodaj Email Service (np. Gmail) -> skopiuj jego Service ID poniżej.
// 3. Stwórz Email Template z polami zgodnymi z templateParams w js/form.js
//    (course_title, course_id, child_name, child_age, parent_name, parent_contact)
//    -> skopiuj Template ID poniżej.
// 4. W Account -> General skopiuj swój Public Key poniżej.
// To jedyne miejsce, które trzeba uzupełnić, aby formularz zapisów zaczął wysyłać e-maile.
const EMAILJS_CONFIG = {
  serviceId: "REPLACE_WITH_SERVICE_ID",
  templateId: "REPLACE_WITH_TEMPLATE_ID",
  publicKey: "REPLACE_WITH_PUBLIC_KEY",
};

// Numer telefonu / WhatsApp używany przez przycisk szybkiego kontaktu (js/main.js)
const CONTACT_PHONE = "+48000000000";
