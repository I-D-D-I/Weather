 
const btn = document.querySelector('.header__btn');
const page = document.querySelector('header__card')
const module = document.querySelector('.module__wrapper');
// const card = document.querySelector('.module__card');

function getOpen() {
  module.style.display = 'block';
}
btn.addEventListener('click', getOpen)

function getClose(e) {
  if (e.target == module) {
    module.style.display = "none";
  }
}
window.addEventListener('click', getClose)