function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card reveal";

  card.innerHTML = `
    <div class="course-card-media">
      <img src="${course.image}" alt="${course.title}" width="600" height="450" loading="lazy">
    </div>
    <div class="course-card-body">
      <h4>${course.title}</h4>
      <p>${course.description}</p>
      <button type="button" class="btn btn-primary btn-block js-signup-trigger"
        data-course-id="${course.id}" data-course-title="${course.title}">
        Zapisz się
      </button>
    </div>
  `;

  return card;
}

function renderCourses() {
  const gridPodstawowa = document.getElementById("course-grid-podstawowa");
  const gridLiceum = document.getElementById("course-grid-liceum");
  if (!gridPodstawowa || !gridLiceum) return;

  COURSES.filter((c) => c.track === "podstawowa").forEach((course) => {
    gridPodstawowa.appendChild(createCourseCard(course));
  });

  COURSES.filter((c) => c.track === "liceum").forEach((course) => {
    gridLiceum.appendChild(createCourseCard(course));
  });

  // Otwarcie modala zapisu przez zdarzenie niestandardowe - oddziela render.js od modal.js
  document.querySelectorAll(".js-signup-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("open-signup-modal", {
          detail: {
            id: button.dataset.courseId,
            title: button.dataset.courseTitle,
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
