import { createEvent } from "./createNewEvent.js";
import { getSelectedDate } from "./getSelectedDate.js";
import { addEvent } from "../db/addgitEvent.js";
import { displayOrHideElement } from "./displayOrHideElement.js";
import * as checkInput from "./checkInput.js";
import { getEditData } from "./editEvent.js";

export const setupAddNewEvent = () => {
    let addEventDiv = document.getElementById("new-event");
    let dateArray = [];
    document
        .getElementById("addevent")
        .addEventListener("click", () => displayOrHideElement(addEventDiv));

    document.getElementById("add-new-event").addEventListener("click", () => {
        console.log(checkInput.checkInput());
        if (checkInput.checkInput()) {
            displayOrHideElement(addEventDiv);
            if (
                document.getElementsByClassName("new-event__button")[0]
                    .value === "Ajouter"
            ) {
                let event = createEvent(dateArray);
                addEvent(event);
            } else {
                getEditData();
            }
        } else {
           checkInput.displayErrorMessage()
        }
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
