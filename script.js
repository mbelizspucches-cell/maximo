const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const stickyCta = document.getElementById('stickyCta');
const hero = document.querySelector('.hero');

if (stickyCta && hero) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      stickyCta.classList.toggle('visible', !entry.isIntersecting);
    },
    { rootMargin: '-10% 0px 0px 0px' }
  );
  observer.observe(hero);
}
