// === Konfiguracja EmailJS ===
// Plan darmowy EmailJS pozwala na max. 2 szablony, dlatego oba formularze (zapis na zajęcia
// i formularz kontaktowy) współdzielą jeden ogólny szablon powiadomień "do mnie".
// Gotowe treści szablonów (do wklejenia w edytorze EmailJS) są w folderze email-templates/.
//
// 1. Załóż darmowe konto na https://www.emailjs.com/
// 2. Dodaj Email Service (np. Gmail) -> skopiuj jego Service ID poniżej jako serviceId.
// 3. Stwórz szablon "Powiadomienie (do mnie)" z treścią z email-templates/powiadomienie-admin.html.
//    Używają go OBA formularze (zgłoszenie na zajęcia i formularz kontaktowy).
//    W zakładce Settings tego szablonu: Subject = {{subject}}, To Email = e.edukacyjna.przystan@gmail.com
//    (Twój adres), Reply To = {{reply_to}}. Skopiuj Template ID poniżej jako templateId.
// 4. Stwórz szablon "Potwierdzenie zgłoszenia (do rodzica)" z treścią z
//    email-templates/zgloszenie-rodzic-potwierdzenie.html. Używa go tylko formularz zapisu na zajęcia.
//    W Settings: Subject = Dziękujemy za zgłoszenie — {{course_title}}, To Email = {{to_email}}
//    (zmienna - wysyłka tylko gdy rodzic podał e-mail), Reply To = e.edukacyjna.przystan@gmail.com.
//    Skopiuj Template ID jako autoreplyTemplateId.
//    Uwaga: jeśli rodzic w polu "Kontakt" poda tylko telefon, ten e-mail się NIE wyśle - to celowe.
// 5. W Account -> General skopiuj swój Public Key poniżej.
// To jedyne miejsce, które trzeba uzupełnić, aby formularze zaczęły wysyłać e-maile.
const EMAILJS_CONFIG = {
  serviceId: "service_0p8qzx9",
  templateId: "template_nk3ndot",
  autoreplyTemplateId: "template_tmel3xo",
  publicKey: "KT7zRnv4TUmHCbXlg",
};

// Numer telefonu / WhatsApp używany przez przycisk szybkiego kontaktu (js/main.js)
const CONTACT_PHONE = "+48785329220";

// Nazwa strony na Facebooku używana przez przycisk Messengera na podstronie Kontakt
// (link ma postać https://m.me/<NAZWA_STRONY>) - podmień na prawdziwą nazwę strony.
const MESSENGER_USERNAME = "edukacyjnaprzystan";
