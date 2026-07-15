let lastFocusedElement = null;
let currentCourseSchedule = [];

function populateChildClassOptions() {
  const select = document.getElementById("child-class");
  if (!select || select.dataset.populated) return;

  CHILD_CLASS_OPTIONS.forEach((option) => {
    const optionEl = document.createElement("option");
    optionEl.value = option.value;
    optionEl.textContent = option.label;
    select.appendChild(optionEl);
  });
  select.dataset.populated = "true";
}

function renderScheduleForClass(classValue) {
  const scheduleEl = document.getElementById("modal-course-schedule");
  const hintEl = document.getElementById("schedule-hint");
  if (!scheduleEl || !hintEl) return;

  if (!classValue) {
    scheduleEl.innerHTML = "";
    hintEl.hidden = false;
    hintEl.textContent = "Wybierz klasę dziecka, aby zobaczyć dostępne terminy.";
    return;
  }

  const matches = currentCourseSchedule.filter(
    (slot) => slot.classes === "all" || (slot.classes || []).includes(classValue)
  );

  if (!matches.length) {
    scheduleEl.innerHTML = "";
    hintEl.hidden = false;
    hintEl.textContent = "Brak terminów dla wybranej klasy - skontaktuj się z nami, aby ustalić szczegóły.";
    return;
  }

  hintEl.hidden = true;
  scheduleEl.innerHTML = matches
    .map((slot, index) => {
      const label = `${slot.time}${slot.note ? ` (${slot.note})` : ""}`;
      return `
        <li>
          <label class="schedule-option">
            <input type="radio" name="selected_term" value="${label}" ${index === 0 ? "checked" : ""}>
            <span>${label}</span>
          </label>
        </li>
      `;
    })
    .join("");

  setFieldError("schedule-field", "");
}

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

function openModal(courseId, courseTitle, courseSchedule) {
  const modal = document.getElementById("signup-modal");
  if (!modal) return;

  resetFormState();

  document.getElementById("course-id").value = courseId || "";
  document.getElementById("modal-course-name").textContent = courseTitle || "";

  currentCourseSchedule = courseSchedule || [];
  renderScheduleForClass("");

  lastFocusedElement = document.activeElement;

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const firstInput = document.getElementById("child-class");
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

  populateChildClassOptions();

  document.addEventListener("open-signup-modal", (event) => {
    openModal(event.detail.id, event.detail.title, event.detail.schedule);
  });

  const classSelect = document.getElementById("child-class");
  if (classSelect) {
    classSelect.addEventListener("change", () => {
      renderScheduleForClass(classSelect.value);
    });
  }

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
