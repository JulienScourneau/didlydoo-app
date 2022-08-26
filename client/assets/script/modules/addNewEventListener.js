import { createEvent } from "./createNewEvent.js";

export const setupAddNewEvent = () => {
    document
        .getElementById("addevent")
        .addEventListener("click", () => openAddNewEvent());

    document.getElementById("add-new-event").addEventListener("click", () => {
        openAddNewEvent();
        createEvent();
    });
    setupTodayDate();
};

export const setupTodayDate = () => {
    let dateinput = document.getElementById("new-date");
    dateinput.valueAsDate = new Date();
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
