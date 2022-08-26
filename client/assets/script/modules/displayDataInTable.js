/**
 * 
 * @param {*} event 
 */
export function displayDataInTable(event) {
  let tbody = document.getElementsByClassName("event__content__table__data")[0];

  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");

  input1.setAttribute("type", "checkbox");
  input1.className = "checkbox";
  input2.setAttribute("type", "checkbox");
  input2.className = "checkbox";

  tbody.appendChild(tr);
  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  td1.appendChild(input1);
  td2.appendChild(input2);

  th.innerHTML = event.author;
  document.getElementsByClassName("event__header__nav__info__title")[0].innerHTML = event.name;
  document.getElementsByClassName("event__header__nav__info__author")[0].innerHTML = event.author;
  document.getElementsByClassName("event__header__description")[0].innerHTML =event.description;
}
