let menu = document.querySelector('.burger-menu');
menu.addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.burger-menu-nav').classList.toggle('open');
});
