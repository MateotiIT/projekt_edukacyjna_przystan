document.addEventListener("DOMContentLoaded", () => {
  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  renderCourses();
  renderTestimonials();
  renderFaqs();

  initNavToggle();
  initHeaderScrollState();
  initScrollReveal();
  initFaqAccordion();
  initModal();
  initSignupForm();

  const fab = document.getElementById("fab-contact");
  if (fab) {
    fab.addEventListener("click", () => {
      window.location.href = `tel:${CONTACT_PHONE}`;
    });
  }
});
