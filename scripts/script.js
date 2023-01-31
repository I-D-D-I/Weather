// const bttn = document.createElement('button');
// bttn.textContent = 'hello';
// document.body.prepend(bttn);
// bttn.addEventListener('click', handleClick);
    
//     function handleClick() {
//       return bttn.style.display = 'none';  
//     }

// function handleInput(value) {
//     console.log(value);
    // const p = document.createElement('p');
    // p.textContent = value;
    // document.body.prepend(p);
// }

// const inp = document.createElement('input');
// inp.textContent = 'hello';
// document.body.prepend(inp);
// inp.addEventListener('change', (e) => handleInput(e.target.value));
        
/////////////////////

// function handleInput(value) {
//     // console.log(value);
//     if (value == data.title) {
//         console.log(data.title);
//     }
//     // p.textContent = value;
//     // document.body.prepend(p);
// }

// const inp = document.querySelector('.header__input');
// // inp.textContent = 'hello';
// // document.body.prepend(inp);
// inp.addEventListener('input', (e) => handleInput(e.target.value));
    
/////////////////////////

import { data } from './data.js'

const cont = document.querySelector('.services__wrapper');

function box(data) {
    for (let el of data) {
        createCard(el);
    }
}
box(data)


// const obj = {
//     title: "100",
//     symbol: "💯",
//     keywords:
//       "hundred points symbol symbol wow wow win win perfect perfect parties parties",
//   };
  
  
  function createCard(newObj) {
    const itemNew = document.createElement('div');
    itemNew.className = 'services__item';
  
    const pictureNew = document.createElement('p');
    pictureNew.textContent = newObj.symbol;
    pictureNew.className = 'item__picture';
  
    const nameNew = document.createElement('p');
    nameNew.textContent = newObj.title;
    nameNew.className = 'item__name';
  
    const textNew = document.createElement('p');
    textNew.textContent = newObj.keywords;
    textNew.className = 'item__text';
  
    itemNew.append(pictureNew, nameNew, textNew);
    cont.append(itemNew);
  }
  
//   createCard(data)

function handleInput(value) {
    // console.log(value);
    const el = document.querySelector('.title');
    el2 = el.filter((item) => el.shift == value);
    document.body.prepend(el2);

    // if (value == data.title) {
    //     console.log(data.title);
        // document.body.prepend(p);
    // }
    // p.textContent = value;
    // document.body.prepend(p);
}

const inp = document.querySelector('.header__input');
inp.addEventListener('input', (e) => handleInput(e.target.value));