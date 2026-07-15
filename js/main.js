document.addEventListener("DOMContentLoaded", () => {
  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  renderCourses();
  renderRelatedCourses();
  renderTestimonials();
  renderFaqs();
  initSignupTriggers();

  initNavToggle();
  initHeaderScrollState();
  initScrollReveal();
  initFaqAccordion();
  initModal();
  initSignupForm();
  initContactForm();

  const fab = document.getElementById("fab-contact");
  if (fab) {
    fab.addEventListener("click", () => {
      window.location.href = `tel:${CONTACT_PHONE}`;
    });
  }

  const messengerLink = document.getElementById("messenger-link");
  if (messengerLink) {
    messengerLink.href = `https://m.me/${MESSENGER_USERNAME}`;
  }
});
