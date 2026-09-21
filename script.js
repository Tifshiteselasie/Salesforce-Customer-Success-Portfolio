(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const progress = document.getElementById('scroll-progress-bar');
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalClose = document.getElementById('modal-close');
  const year = document.getElementById('year');

  year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') root.dataset.theme = 'dark';

  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    if (next === 'light') delete root.dataset.theme;
    else root.dataset.theme = 'dark';
    localStorage.setItem('portfolio-theme', next);
  });

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  document.querySelectorAll('[data-delay]').forEach((el) => {
    el.style.setProperty('--delay', `${Number(el.dataset.delay) || 0}ms`);
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-42% 0px -50% 0px', threshold: 0 });
  sections.forEach((section) => activeObserver.observe(section));

  document.querySelectorAll('.image-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      modalImage.src = button.dataset.image;
      modalImage.alt = button.dataset.alt || 'Expanded portfolio screenshot';
      modal.showModal();
    });
  });

  const closeModal = () => {
    if (modal.open) modal.close();
  };
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
})();
