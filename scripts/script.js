'use strict';
let weather = document.querySelector('.weather');
// let weather = document.createElement('div');
// weather.className = 'weather';
let city = document.querySelector('.city');
let number = document.querySelector('.number');

const API_KEY = 'f4d7c56698cedaa6a29215d4a7efa029';
const API_LOC = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_jmKGXix9AZMZn4fefFUQcZGDuSZ3c';
// const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

//Получить доступ к геолокации позволяет свойство navigator.geolocation объекта navigator:
if (!navigator.geolocation) {
  weather.innerHTML = `<p class='city'>Ваш браузер не дружит с геолокацией...</p>`;
} else {
  navigator.geolocation.getCurrentPosition(success, error)
}

async function success(position) {  // если всё хорошо, собираем ссылку
  // let { longitude, latitude }  = position.coords
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let data = await getLocation(longitude, latitude);
  // console.log(data);
  showWeather(data);
}

function error() { // если всё плохо, просто напишем об этом
  weather.innerHTML = `<p class='city'>Не получается определить вашу геолокацию :(</p>`;  
}

async function getLocation(lon, lat) {
  const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
}

//отрисовка пэшки
function showWeather (data) { 
  const temp = Math.round(+data.main.temp);
  // console.log(temp);
  const air = data.weather[0].description;
  // console.log(air);
  const town = data.name;
  // console.log(town);
  weather.innerHTML = `<p class='number'>${temp}℃</p>
                          <p class='city'>${air} in ${town}</p>
                          <button class="change">Change city</button>`
  const btn = weather.querySelector('.change')
  btn.addEventListener('click', showCity);
  }

  function showCity() {
    weather.innerHTML = `<input class='input' placeholder='Type your city here' >
                          <button class="find">Find</button>`

    
const findBtn = weather.querySelector('.find')
findBtn.addEventListener('click', async function getCity() {
      let inputVal = document.querySelector('input').value;
      // let input = document.querySelector('input')
      // let inputVal = input.value;
      let responce = await fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${inputVal}&limit=5&appid=${API_KEY}`)
      let arr = await responce.json();
      // console.log(arr)
      if(!arr.length) {
        weather.innerHTML = `<p class='city'>Ooops. Something went wrong :(</p>
                              <p class='error'>Error info</p>
                              <button class="find">Try again</button>`;
      const findBtn = weather.querySelector('.find')
      findBtn.addEventListener('click', showCity)
      setTimeout(showCity, 10000)
      } else {
      let longitude = arr[0].lon;
      let latitude = arr[0].lat;
      let data = await getLocation(longitude, latitude);
      showWeather(data);
      }
    }
  )
}
  