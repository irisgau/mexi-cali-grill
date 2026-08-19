document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// --- Language toggle (EN / ES) ---
function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getPath(dict, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getPath(dict, el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = lang === 'en' ? 'ES' : 'EN';

  localStorage.setItem('mcg-lang', lang);
}

let currentLang = localStorage.getItem('mcg-lang') || 'en';
applyLang(currentLang);

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyLang(currentLang);
  });
}
