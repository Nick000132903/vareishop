// ========================================
// THEME.JS - Toggle Dark/Light Mode
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Carregar tema salvo ou usar dark como padrão
const savedTheme = localStorage.getItem('theme') || 'dark';
html.classList.toggle('dark', savedTheme === 'dark');

// Toggle theme
themeToggle.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');

  const isOpen = mobileMenu.classList.contains('open');
  const spans = hamburgerBtn.querySelectorAll('span');

  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translateY(7px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});
