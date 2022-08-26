import { createEvent } from "./createNewEvent.js";
import { getSelectedDate } from "./getSelectedDate.js";

export const setupAddNewEvent = () => {
    document
        .getElementById("addevent")
        .addEventListener("click", () => openAddNewEvent());

    document.getElementById("add-new-event").addEventListener("click", () => {
        openAddNewEvent();
        createEvent();
    });

    document.getElementById("new-date").addEventListener("input", (e) => {
        console.log("event");
        addNewDate(e.target.value);
    });

    //setupTodayDate("new-date");
};

const setupTodayDate = (id) => {
    let dateinput = document.getElementById(id);
    dateinput.valueAsDate = new Date();
};

const addNewDate = (value) => {
    let container = document.getElementById("new-event__date__container");
    let timeContainer = document.createElement("div")
    let time = document.createElement("time");
    let img = document.createElement("img");

    console.log(value);

    timeContainer.classList.add("new-event__date__container__date")
    time.classList.add("new-event__date__container__date__time")
    img.classList.add("new-event__date__container__date__img")

    time.textContent = getSelectedDate(value);
    img.src = "/client/assets/images/delete.svg";

    timeContainer.appendChild(time);
    timeContainer.appendChild(img);
    container.appendChild(timeContainer);

    img.addEventListener("click", () => {
        timeContainer.remove()
    });
};

const openAddNewEvent = () => {
    let div = document.getElementById("new-event");
    if (
        window.getComputedStyle(div, null).getPropertyValue("display") == "none"
    ) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
};
