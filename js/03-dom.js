// 10 Users
// Есть массив юзеров, вывести на страницу карточку каждого
// юзера с именем, возрастом и цветом глаз
// Использовать append / insertAdjacentHTML

import users from "./users.js";
const listRef = document.querySelector("#users");

const usersLists = users.map((user) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const spanText = document.createElement("span");
  const spanStyle = document.createElement("span");

  h2.textContent = user.name;
  p.textContent = `Age: ${user.age}`;
  spanText.textContent = "Eye color: ";
  spanStyle.style.backgroundColor = user.eyeColor;

  li.append(h2, p, spanText, spanStyle);
  return li;
});

listRef.append(...usersLists);

// listRef.innerHTML = 'text';
// listRef.insertAdjacentHTML('beforeend', 'text');

//   <li>
//     <h2>Moore Hensley</h2>
//     <p>Age: 37</p>
//     <span>Eye color: </span>
//     <span style="background-color: blue"></span>
//   </li>

// const usersListEl = users.map(
//   user => `<li>
//     <h2>${user.name}</h2>
//     <p>Age: ${user.age}</p>
//     <span>Eye color: </span>
//     <span style="background-color:${user.eyeColor}"></span>
//   </li>`,
// );

// listRef.insertAdjacentHTML('beforeend', usersListEl.join(''));
