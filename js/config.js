// === Konfiguracja EmailJS ===
// 1. Załóż darmowe konto na https://www.emailjs.com/
// 2. Dodaj Email Service (np. Gmail) -> skopiuj jego Service ID poniżej.
// 3. Stwórz Email Template z polami zgodnymi z templateParams w js/form.js
//    (course_title, course_id, child_name, child_class, selected_term, parent_name,
//    parent_phone, parent_contact, terms_accepted) -> skopiuj Template ID poniżej jako templateId.
// 4. Stwórz drugi Email Template dla formularza kontaktowego, z polami zgodnymi z
//    templateParams w js/contact-form.js (name, contact, message) -> skopiuj jego
//    Template ID poniżej jako contactTemplateId.
// 5. W Account -> General skopiuj swój Public Key poniżej.
// To jedyne miejsce, które trzeba uzupełnić, aby formularze zaczęły wysyłać e-maile.
const EMAILJS_CONFIG = {
  serviceId: "REPLACE_WITH_SERVICE_ID",
  templateId: "REPLACE_WITH_TEMPLATE_ID",
  contactTemplateId: "REPLACE_WITH_CONTACT_TEMPLATE_ID",
  publicKey: "REPLACE_WITH_PUBLIC_KEY",
};

// Numer telefonu / WhatsApp używany przez przycisk szybkiego kontaktu (js/main.js)
const CONTACT_PHONE = "+48000000000";

// Nazwa strony na Facebooku używana przez przycisk Messengera na podstronie Kontakt
// (link ma postać https://m.me/<NAZWA_STRONY>) - podmień na prawdziwą nazwę strony.
const MESSENGER_USERNAME = "edukacyjnaprzystan";
