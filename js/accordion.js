function initFaqAccordion() {
  const accordion = document.getElementById("faq-accordion");
  if (!accordion) return;

  accordion.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-question");
    if (!button) return;

    const answer = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    if (answer) answer.dataset.open = String(!isOpen);
  });
}
