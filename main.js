const navbarToggler = document.getElementById('bars');
const navbarMenu = document.querySelector('.list');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});
