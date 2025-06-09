const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('ativo');
  menuToggle.classList.toggle('open');
});
