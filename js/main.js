const API = "https://rickandmortyapi.com/api/character";
const API2 = "http://localhost:8000/characters";
// Запросы. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/
let list = document.querySelector(".list");
let list2 = document.querySelector(".list2");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
let spanDel = document.querySelector(".spanDel");

btn.addEventListener("click", creatCharacter);

async function creatCharacter() {
  let res = await fetch(API);
  let data = await res.json();
  list.innerHTML = "";
  data.results.forEach((elem) => {
    list.innerHTML += `
    <div>${elem.id}
    <img src="${elem.image}" alt="">
    <h3>${elem.name}</h3>
    <p>${elem.gender}</p>
    <p>${elem.status}</p>
    <p>${elem.species}</p>
    </div>`;
  });
}

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

// async function localCreateCharacters() {
//   const res = await fetch(API);
//   const data = await res.json();
//   fetch(API2, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify(data.results),
//   });
// }
// localCreateCharacters();
/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
btn2.addEventListener("click", readCharacters);

async function readCharacters() {
  const res = await fetch(API2);
  const data = await res.json();
  list2.innerHTML = "";
  data[0].forEach((elem) => {
    list2.innerHTML += `
    <div>${elem.id}
    <img src="${elem.image}" alt="">
    <h3>${elem.name}</h3>
    <p>${elem.gender}</p>
    <p>${elem.status}</p>
    <p>${elem.species}</p>
    </div>`;
  });
}
