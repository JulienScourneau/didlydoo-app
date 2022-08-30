import { createEvent } from "./createNewEvent.js";
import { getSelectedDate } from "./getSelectedDate.js";
import { addEvent } from "../db/addEvent.js";
import { displayOrHideElement } from "./displayOrHideElement.js";
import * as checkInput from "./checkInput.js";
import { getEditData } from "./editEvent.js";

export const setupAddNewEvent = () => {
    let dateArray = [];
    document
        .getElementById("addevent")
        .addEventListener("click", () =>
            displayOrHideElement(document.getElementById("new-event"))
        );

    document.getElementById("add-new-event").addEventListener("click", () => {
        if (checkInput.checkInput()) {
            displayOrHideElement(document.getElementById("new-event"));
            if (document.getElementById("add-new-event").value == "Ajouter") {
                filterDateList(dateArray);
                let event = createEvent(dateArray);
                addEvent(event);
            } else {
                getEditData();
            }
        } else {
            checkInput.displayErrorMessage();
        }
    });

    document.getElementById("new-date").addEventListener("input", (e) => {
        addNewDate(e.target.value);
        dateArray.push(e.target.value);
    });
};

export const addNewDate = (value) => {
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

const filterDateList = (array) => {
    let dateTimeList = document.getElementsByClassName(
        "new-event__date__container__date__time"
    );
    let dateList = [];
    for (let elem of dateTimeList) {
        dateList.push(elem.textContent);
    }
    console.log(dateList);

    console.log(
        array.filter(
            (date) =>
                dateList
                    .map((elem) => elem.textContent)
                    .indexOf(getSelectedDate(date)) < 0
        )
    );
};
