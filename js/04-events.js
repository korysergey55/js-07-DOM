// 4 - Туду лист (change, submit, preventDefault, form.elements)
// Есть форма с одним инпутом, куда вводится текст.
// 1) И есть чекбокс. Пока чекбокс не нажат, кнопка на форме неактивна.
// 2) По нажатию Enter в инпуте или по нажатию на кнопку Add (type="submit"), в список ниже, добавляется todo-заметка.
// 3) Очистить инпут
// 4) Убрать перезагрузку, обращаться через форму (elements) и имя инпута
// 5) При клике на todo-заметку в списке, она становится выполненной, т.е. текст зачеркивается (класс complete)

// const refs = {
//   checkbox: document.querySelector('input[name="confirm"]'),
//   addBtn: document.querySelector('button[type="submit"]'),
//   input: document.querySelector('input[name="todo"]'),
//   form: document.querySelector('form'),
//   list: document.querySelector('ol.todo-list'),
// };

// refs.form.addEventListener('submit', onFormSumbit);

// function onFormSumbit(event) {
//   event.preventDefault();

//   const form = event.currentTarget;
//   const input = form.elements.todo;

//   const li = document.createElement('li');
//   li.textContent = input.value;
//   li.addEventListener('click', evt => li.classList.toggle('complete'));

//   refs.list.appendChild(li);

//   input.value = '';
// }

// refs.checkbox.addEventListener('change', event => {
//   const targetCheckbox = event.target;

//   if (targetCheckbox.checked && refs.input.value.length !== 0) {
//     refs.addBtn.disabled = false;
//   } else {
//     refs.addBtn.disabled = true;
//   }

//   // refs.addBtn.disabled = targetCheckbox.checked && refs.input.value ? false : true;

//   // refs.addBtn.disabled = !targetCheckbox.checked || !refs.input.value;
// });
