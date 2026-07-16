function createCourseCard(course, options = {}) {
  const { showAgeGroup = false, detailBasePath = "kursy/", headingLevel = "h4" } = options;

  const card = document.createElement("article");
  card.className = "course-card reveal";

  const ageBadge = showAgeGroup && course.ageGroup
    ? `<span class="course-age-badge">${course.ageGroup}</span>`
    : "";

  card.innerHTML = `
    <div class="course-card-media">
      <img src="${course.image}" alt="${course.title}" width="600" height="450" loading="lazy">
    </div>
    <div class="course-card-body">
      ${ageBadge}
      <${headingLevel}>${course.title}</${headingLevel}>
      <p>${course.description}</p>
      <div class="course-card-actions">
        <button type="button" class="btn btn-primary btn-block js-signup-trigger"
          data-course-id="${course.id}" data-course-title="${course.title}">
          Zapisz się
        </button>
        <a href="${detailBasePath}${course.id}.html" class="btn btn-secondary btn-block">
          Wyświetl szczegóły
        </a>
      </div>
    </div>
  `;

  return card;
}

function renderCourses() {
  const gridPodstawowa = document.getElementById("course-grid-podstawowa");
  const gridLiceum = document.getElementById("course-grid-liceum");
  if (!gridPodstawowa || !gridLiceum) return;

  const showAgeGroup = gridPodstawowa.dataset.showAgeGroup === "true";

  COURSES.filter((c) => c.track === "podstawowa").forEach((course) => {
    gridPodstawowa.appendChild(createCourseCard(course, { showAgeGroup }));
  });

  COURSES.filter((c) => c.track === "liceum").forEach((course) => {
    gridLiceum.appendChild(createCourseCard(course, { showAgeGroup }));
  });
}

// Karty "może Cię zainteresować" na podstronach kursów - inne zajęcia z tej samej kategorii.
function renderRelatedCourses() {
  const grid = document.getElementById("related-courses-grid");
  if (!grid) return;

  const currentId = grid.dataset.currentCourseId;
  const track = grid.dataset.track;

  COURSES.filter((c) => c.track === track && c.id !== currentId)
    .slice(0, 3)
    .forEach((course) => {
      grid.appendChild(createCourseCard(course, { showAgeGroup: true, detailBasePath: "", headingLevel: "h3" }));
    });
}

// Otwarcie modala zapisu przez zdarzenie niestandardowe - oddziela ten kod od modal.js.
// Działa zarówno na kartach generowanych przez JS, jak i na statycznych przyciskach (np. na podstronach kursów).
function initSignupTriggers() {
  document.querySelectorAll(".js-signup-trigger").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const course = COURSES.find((c) => c.id === trigger.dataset.courseId);
      document.dispatchEvent(
        new CustomEvent("open-signup-modal", {
          detail: {
            id: trigger.dataset.courseId,
            title: trigger.dataset.courseTitle,
            schedule: course ? course.schedule : [],
          },
        })
      );
    });
  });
}

function renderTestimonials() {
  const grid = document.getElementById("testimonial-grid");
  if (!grid) return;

  TESTIMONIALS.forEach((item) => {
    const card = document.createElement("article");
    card.className = "testimonial-card reveal";
    card.innerHTML = `
      <p class="testimonial-quote">${item.quote}</p>
      <div class="testimonial-author">
        <span class="testimonial-avatar" aria-hidden="true">🙂</span>
        <span>${item.author}, <span style="font-weight:500;color:var(--color-ink-muted)">${item.role}</span></span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderFaqs() {
  const accordion = document.getElementById("faq-accordion");
  if (!accordion) return;

  FAQS.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "accordion-item";

    const questionId = `faq-question-${index}`;
    const answerId = `faq-answer-${index}`;

    wrapper.innerHTML = `
      <h3 style="margin:0;">
        <button type="button" class="faq-question" id="${questionId}"
          aria-expanded="false" aria-controls="${answerId}">
          <span>${item.question}</span>
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
      </h3>
      <div class="faq-answer" id="${answerId}" role="region" aria-labelledby="${questionId}" data-open="false">
        <p>${item.answer}</p>
      </div>
    `;

    accordion.appendChild(wrapper);
  });
}
