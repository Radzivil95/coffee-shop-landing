const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__modal');
const closeBtn = document.querySelector('.close');

burger.addEventListener('click', () => {
  burgerMenu.classList.add('modal__active');
});
closeBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('modal__active');
})