const navbarToggler = document.getElementById('bars');
const navbarMenu = document.querySelector('.yu');

navbarToggler.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});
