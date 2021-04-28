// 1 - Классы

// Дан элемент #elem.
// Получить ссылку на него.

// const elem = document.querySelector('#elem');
// // const elem = document.querySelector('h2');
// // const elem = document.querySelector('.first');
// // const elem = document.getElementById('elem');

// console.dir(elem);

// // Добавьте ему класс blue.

// // elem.classList.add('blue');
// elem.classList.add('blue', 'red');

// // Удалите у него класс red.

// elem.classList.remove('red');

// // Проверьте наличие у него класса blue.

// console.log(elem.classList.contains('red'));

// // Добавьте ему класс blue, если его нет, и удалите - если есть.

// elem.classList.toggle('blue');
// elem.classList.toggle('blue');

// // Узнайте количество его классов.

// console.log(elem.classList.length);

// // Выведите последовательно в консоль его классы.

// // console.log(elem.classList);

// elem.classList.forEach(el => console.log(el));

// /////////////////////////////////////////////////////////////////

// Пример 2 - style

// Дан элемент #elem.

// const elemRef = document.querySelector('h2');

// // Задайте ему фон синего цвета

// elemRef.style.backgroundColor = 'tomato';

// // Задайте ему ширину 100px

// elemRef.style.width = '100px';

// // добавьте ему черную границу шириной 5рх

// elemRef.style.border = '5px solid black';

// // Отцентруйте текст

// elemRef.style.textAlign = 'center';

// /////////////////////////////////////////////////////////////

// Пример 3 - Свойство tagName и текстовый контент

// Дан элемент #elem.

// const elem = document.querySelector('h3');
// document.querySelector('#elem');

// console.log(elem.tagName);

// Выведите название его тега.

// Даны элементы с классом text.
// Получите ссылку на все эти элементы.
// Добавьте каждому элементу в конец
// название его тега в нижнем регистре.

// const tags = document.querySelectorAll('.text');

// // console.dir(tags);

// tags.forEach(tag => {
//   console.dir(tag);
//   // tag.textContent = `${tag.textContent} ${tag.tagName.toLowerCase()}`;
//   // tag.textContent = tag.textContent + tag.tagName.toLowerCase();
//   tag.textContent += tag.tagName.toLowerCase();
//   tag.style.color = 'tomato';
// });

// /////////////////////////////////////////////////////////////

// 4 - Создание и вставка элементов через appendChild,
// insertBefore и append. Children.

// Дан ol. Вставьте в конец списка новую li с текстом 'Soft Skills'.

// const olRef = document.querySelector('ol');
// const liToClone = document.querySelector('.blue');
// const newLi = liToClone.cloneNode(true);

// console.log(newLi);

// newLi.textContent = 'Soft Skills';

// olRef.appendChild(newLi);

// // console.log(liElem);

// // Получить список вложенных в ol элементов,
// // и вывести их количество в консоль

// console.log(olRef.children.length);

// // Вставить созданный ранее li с текстом 'Soft Skills'
// // не в конец, а в середину списка.
// // Определить средний индекс и использовать insertBefore

// const liElem = document.createElement('li');
// liElem.textContent = 'Vue';

// const middleIndex = Math.ceil(olRef.children.length / 2);

// olRef.insertBefore(liElem, olRef.children[middleIndex]);

// // Из списка вложенных в ol элементов
// // получить массив их текстовых значений

// const texts = [...olRef.children].map(elem => elem.textContent);

// console.log(texts);

// // На основе этого нового массива создать массив лишек с таким же текстом

// const liArr = texts.map(text => {
//   const liElem = document.createElement('li');
//   liElem.textContent = text;
//   return liElem;
// });

// console.log(liArr);

// // Дан ul, получить на него ссылку.
// // Вставьте элементы нового массива лишек в конец ul
// // за одну операцию вставки

// const list = document.querySelector('ul');

// list.append(...liArr);

// ////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

// 10 Users
// Есть массив юзеров, вывести на страницу карточку каждого
// юзера с именем, возрастом и цветом глаз
// Использовать append / insertAdjacentHTML

// import users from './users.js';

// const list = document.querySelector('#users');

// const items = users.map(
//   user => `
// <li>
//   <h2>${user.name}</h2>
//   <p>${user.email}</p>
// </li>`,
// );

// list.insertAdjacentHTML('beforeend', items.join(''));
// // list.append(...items);

// const li = list.querySelector('li');
// console.log(li);
