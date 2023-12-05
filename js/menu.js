document.addEventListener('DOMContentLoaded', function () {
  let burgerMenu = document.querySelector('.burger-menu');
  let burgerMenuOverlay = document.querySelector('.burger-menu-nav');

  burgerMenu.addEventListener('click', function () {
    burgerMenuOverlay.classList.toggle('show');
  });
});
