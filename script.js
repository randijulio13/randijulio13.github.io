document.getElementById("year").textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const sections = document.querySelectorAll(".reveal");

  sections.forEach((el) => el.classList.add("js-hidden"));

  const reveal = (el) => {
    el.classList.remove("js-hidden");
    el.classList.add("js-visible");
    observer.unobserve(el);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) reveal(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  sections.forEach((el) => observer.observe(el));

  // Lompatan scroll melewati elemen tanpa memicu observer; elemen di dasar halaman juga
  // tak pernah melewati ambangnya.
  let ticking = false;
  const sweep = () => {
    ticking = false;
    const atEnd =
      Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;

    sections.forEach((el) => {
      if (!el.classList.contains("js-hidden")) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || (atEnd && rect.top < window.innerHeight)) reveal(el);
    });
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(sweep);
    },
    { passive: true }
  );

  // Posisi scroll yang dipulihkan browser tidak memicu event, jadi yang sudah di layar dibuka langsung.
  if (window.scrollY > 0) {
    sections.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) reveal(el);
    });
  }
}
