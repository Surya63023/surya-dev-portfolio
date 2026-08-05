/* =========================================================
   SURYA TEJA — PORTFOLIO
   Vanilla JS — no frameworks, no build step.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCustomCursor();
  initProgressBar();
  initNavbar();
  initTypedRole();
  initScrollReveal();
  initTiltCards();
  initParallaxBackground();
  initContactForm();
  initFooterExtras();
});

/* ---------- Loader ---------- */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  const hide = () => loader.classList.add("is-hidden");
  window.addEventListener("load", () => setTimeout(hide, 550));
  // Safety net in case the load event is delayed by slow assets
  setTimeout(hide, 3200);
}

/* ---------- Custom cursor ---------- */
function initCustomCursor() {
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (!isFinePointer) return;

  document.documentElement.classList.add("has-fine-pointer");
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  requestAnimationFrame(animateRing);

  const interactiveEls = "a, button, input, textarea, .chip, .project-card, .skill-card, .cert-card";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveEls)) ring.classList.add("is-active");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveEls)) ring.classList.remove("is-active");
  });
}

/* ---------- Scroll progress bar ---------- */
function initProgressBar() {
  const fill = document.getElementById("progressFill");
  if (!fill) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    fill.style.width = pct + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- Navbar: scroll state, mobile toggle, scroll-spy ---------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const navLinkEls = document.querySelectorAll(".nav-link[data-nav]");
  const sections = Array.from(navLinkEls)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 30);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinkEls.forEach((link) => {
            link.classList.toggle("active-link", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => spy.observe(section));
  }
}

/* ---------- Typed role text (hand-rolled, no dependency) ---------- */
function initTypedRole() {
  const el = document.getElementById("roleTyped");
  if (!el) return;

  const roles = [
    "Java Full Stack Developer.",
    "Spring Boot Developer.",
    "REST API Builder.",
    "DSA Enthusiast.",
  ];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 32;
  const HOLD_TIME = 1600;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        return setTimeout(tick, HOLD_TIME);
      }
      return setTimeout(tick, TYPE_SPEED);
    }

    charIndex--;
    el.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      return setTimeout(tick, 350);
    }
    setTimeout(tick, DELETE_SPEED);
  }

  setTimeout(tick, 1400);
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((t) => observer.observe(t));
}

/* ---------- 3D tilt-on-hover for cards ---------- */
function initTiltCards() {
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!isFinePointer || reducedMotion) return;

  const cards = document.querySelectorAll(".project-card, .skill-card, .cert-card");
  const MAX_TILT = 7;

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -MAX_TILT;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * MAX_TILT;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      card.style.setProperty("--glare-x", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--glare-y", `${(y / rect.height) * 100}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ---------- Mouse-parallax ambient background orbs ---------- */
function initParallaxBackground() {
  const orbs = document.querySelectorAll(".bg-orb");
  if (!orbs.length) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.addEventListener(
    "mousemove",
    (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((orb, i) => {
        const depth = (i + 1) * 14;
        orb.style.setProperty("--px", `${x * depth}px`);
        orb.style.setProperty("--py", `${y * depth}px`);
      });
    },
    { passive: true }
  );
}

/* ---------- Contact form (sends via EmailJS — no mail client redirect) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (!form) return;

  const submitBtn = form.querySelector(".form-submit");
  const defaultLabel = submitBtn ? submitBtn.textContent : "Send Message";

  const EMAILJS_SERVICE_ID = "service_dkeibij";
  const EMAILJS_TEMPLATE_ID = "template_y24er3o";
  const OWNER_EMAIL = "suryateja36200@gmail.com";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      note.textContent = "Please fill in every field before sending.";
      return;
    }

    if (typeof emailjs === "undefined") {
      note.textContent = "Email service didn't load. Please email me directly at " + OWNER_EMAIL + ".";
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }
    note.textContent = "";

    // Sent under a few common EmailJS variable names ({{name}}/{{from_name}},
    // {{email}}/{{from_email}}/{{reply_to}}, {{message}}) so it lines up with
    // whichever ones the EmailJS template actually uses.
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: name,
        from_name: name,
        email: email,
        from_email: email,
        reply_to: email,
        message: message,
        to_email: OWNER_EMAIL,
      })
      .then(
        () => {
          note.textContent = "Message sent — thanks for reaching out! I'll get back to you soon.";
          form.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          note.textContent = "Something went wrong sending that. Please email me directly at " + OWNER_EMAIL + ".";
        }
      )
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultLabel;
        }
      });
  });
}

/* ---------- Footer: year + back to top ---------- */
function initFooterExtras() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
