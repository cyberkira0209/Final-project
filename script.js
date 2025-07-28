document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight * 0.85) {
        if (!section.classList.contains('section-visible')) {
          section.style.animationDelay = `${index * 0.3}s`;
          section.classList.add("section-visible");
          section.classList.remove("section-hidden");
        }
      } else {
        section.classList.remove("section-visible");
        section.classList.add("section-hidden");
        section.style.animationDelay = '0s';
      }
    });
  };

  sections.forEach(section => section.classList.add("section-hidden"));
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // Кнопка scroll-to-top (без змін)
  const scrollBtn = document.querySelector('.scroll-to-top');
  if(scrollBtn) {
    scrollBtn.style.display = 'none';
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
    scrollBtn.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
