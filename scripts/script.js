
import { data } from './data.js'

const cont = document.querySelector('.services__wrapper');
const inputLine = document.querySelector('.header__input');
const selectLine = document.querySelector('.header__select');



data.forEach((el) => cont.append(createCard(el)))


  function createCard(newObj) {
    const cardNew = document.createElement('div');
    cardNew.className = 'services__item';
    cardNew.innerHTML = `<img class='item__picture' src= ${newObj.image} alt = 'actor'/>
    <div class='item__about'><p class='item__name'>${newObj.name}</p><p class='item__text'>Actor: ${newObj.actor}</p><p class='item__text'>Gender: ${newObj.gender}</p><p class='item__text'>House: ${newObj.house}</p><p class='item__text'>Wand core: ${newObj.wand.wood} ${newObj.wand.core}</p><p class='item__text'>Alive: ${newObj.alive ? 'yes': 'no'}</p></div>`;
    return cardNew;
  }

  function handleInput(e) {
    cont.innerHTML = ' ';
    let value = e.toLowerCase().trim();
    data
    .filter((item) => item.name.toLowerCase().includes(value))
    .forEach((item) => cont.append(createCard(item)))
    };
// получили 1 карточку по инпуту по имени

// запускаем 1 событие по поиску по инпуту
inputLine.addEventListener('input', (e) => handleInput(e.target.value));


function handleSelect(ev) {
  cont.innerHTML = ' ';
  // let school = ev;
   data
   .filter((item) => item.house.includes(ev))
   .forEach((item) => cont.append(createCard(item)))
};
// получили 2 карточку по селекту

// запускаем 2 событие
selectLine.addEventListener('change', (ev) => handleSelect(ev.target.value));


// пробуем объединить

function handleInputSelect() {
  const a = inputLine.value;
  // a = a.toLowerCase().trim()
  const b = selectLine.value;
  cont.innerHTML = ' ';

  data.filter((item) => item.name.toLowerCase().includes(a.toLowerCase().trim())).filter((item) => item.house.includes(b)).forEach((item) => cont.append(createCard(item)));
}
inputLine.addEventListener('input', handleInputSelect);
// получаем карточку по инпуту и селекту



//   selectLine.addEventListener('change', (ev) => handleSelect(ev.target.value));


    // data.filter((item) => item.actor.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.gender.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.house.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.wand.wood.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

    // data.filter((item) => item.wand.core.toLowerCase().includes(value)).forEach((item) => cont.append(createCard(item)))

// };


    
// запускаем 1 событие
// inputLine.addEventListener('input', (e) => handleInput(e.target.value));

// function handleInput(e) {
//     cont.innerHTML = ' ';
//     let value = e.toLowerCase().trim();
//     data.filter(
//         (item) => 
//         item.name.toLowerCase().includes(value) ||
//         item.actor.toLowerCase().includes(value) ||
//         item.gender.toLowerCase().includes(value) ||
//         item.house.toLowerCase().includes(value) ||
//         item.wand.wood.toLowerCase().includes(value) ||
//         item.wand.core.toLowerCase().includes(value)
//         )
//         .forEach((item) => cont.append(createCard(item)))
//     };
// получили 1 карточку по инпуту

