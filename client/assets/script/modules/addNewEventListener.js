import { createEvent } from "./createNewEvent.js";
import { getSelectedDate } from "./getSelectedDate.js";
import { addEvent } from "../db/addEvent.js";
import { displayOrHideElement } from "./displayOrHideElement.js";

export const setupAddNewEvent = () => {
    let addEventDiv = document.getElementById("new-event")
    let dateArray = [];
    document
        .getElementById("addevent")
        .addEventListener("click", () => displayOrHideElement(addEventDiv));

    document.getElementById("add-new-event").addEventListener("click", () => {
        displayOrHideElement(addEventDiv)
        addEvent(createEvent(dateArray))
    });

    document.getElementById("new-date").addEventListener("input", (e) => {
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
