let lastFocusedElement = null;

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

function trapFocus(event) {
  const modal = document.getElementById("signup-modal");
  if (!modal || modal.hidden || event.key !== "Tab") return;

  const focusable = getFocusableElements(modal.querySelector(".modal-content"));
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openModal(courseId, courseTitle) {
  const modal = document.getElementById("signup-modal");
  if (!modal) return;

  resetFormState();

  document.getElementById("course-id").value = courseId || "";
  document.getElementById("modal-course-name").textContent = courseTitle || "";

  lastFocusedElement = document.activeElement;

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const firstInput = document.getElementById("child-name");
  if (firstInput) firstInput.focus();
}

function closeModal() {
  const modal = document.getElementById("signup-modal");
  if (!modal) return;

  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) lastFocusedElement.focus();
}

function initModal() {
  const modal = document.getElementById("signup-modal");
  if (!modal) return;

  document.addEventListener("open-signup-modal", (event) => {
    openModal(event.detail.id, event.detail.title);
  });

  modal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
    trapFocus(event);
  });
}
