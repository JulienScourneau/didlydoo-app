import { getEvent } from "../db/getEvent.js";
import { updateEvent } from "../db/updateEvent.js";

export const editEvent = (id) => {
  let event = getEvent(id);
  event.then((json) => {
    console.log(json);
    displayEditEventINtoAddEvent(json);
    modifButton();
    getEditId(json);
  });
};

function displayEditEventINtoAddEvent(json) {
  let div = document.getElementById("new-event");
  div.style.display = "block";

  document.getElementById("new-name").value = json.name;
  document.getElementById("new-description").value = json.description;
  document.getElementById("new-author").value = json.author;
  // for (let element of json.dates) {
  //     // document.getElementsByClassName('new-event__date__container__date__time')[0].textContent = element.date;
  //     console.log(document.getElementById('new-event__date__container')[0].textContent);
  // }
}

function modifButton() {
  document.getElementById("add-new-event").value = "Editer";
  document.getElementById("add-new-event").id = "edit-new-event";
}

let id = "";

function getEditId(json) {
  id = json.id;
}

export function getEditData() {
  let object = {
    name: document.getElementById("new-name").value,
    description: document.getElementById("new-description").value,
    author: document.getElementById("new-author").value,
  };

  updateEvent(id, object);
}
