 
const btn = document.querySelector('.header__btn');
const page = document.querySelector('header__card')
const module = document.querySelector('.module__wrapper');
const body = document.querySelector('body');
// const card = document.querySelector('.module__card');

function getOpen() {
  module.style.display = 'block';
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
}
btn.addEventListener('click', getOpen)

function getClose(e) {
  if (e.target == module) {
    module.style.display = "none";
    body.style.overflow = 'visible';
    body.style.height = 'auto';
  }
}
window.addEventListener('click', getClose)
