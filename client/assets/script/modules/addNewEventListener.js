import { createEvent } from "./createNewEvent.js";
import { getSelectedDate } from "./getSelectedDate.js";
import { addEvent } from "../db/addEvent.js";
import { getEditData } from "./editEvent.js"
import { updateEvent } from "../db/updateEvent.js"

export const setupAddNewEvent = () => {
    let dateArray = [];
    document
        .getElementById("addevent")
        .addEventListener("click", () => openAddNewEvent());

    document.getElementById("add-new-event").addEventListener("click", () => {
        openAddNewEvent();
        if (document.getElementsByClassName('new-event__button')[0].value === 'Ajouter') {
            addEvent(createEvent(dateArray))
        } else {
            getEditData();
        }
    });

    document.getElementById("new-date").addEventListener("input", (e) => {
        console.log("event");
        dateArray.push(addNewDate(e.target.value));
    });
};

const addNewDate = (value) => {
    let container = document.getElementById("new-event__date__container");
    let timeContainer = document.createElement("div");
    let time = document.createElement("time");
    let img = document.createElement("img");

    timeContainer.classList.add("new-event__date__container__date");
    time.classList.add("new-event__date__container__date__time");
    img.classList.add("new-event__date__container__date__img");

    time.textContent = getSelectedDate(value);
    img.src = "/client/assets/images/delete.svg";

    timeContainer.appendChild(time);
    timeContainer.appendChild(img);
    container.appendChild(timeContainer);

    img.addEventListener("click", () => {
        timeContainer.remove();
    });
    return value;
};

const openAddNewEvent = () => {
    let div = document.getElementById("new-event");
    window.getComputedStyle(div, null).getPropertyValue("display") == "none"
        ? (div.style.display = "block")
        : (div.style.display = "none");
};
