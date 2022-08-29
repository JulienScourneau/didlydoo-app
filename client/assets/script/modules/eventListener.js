import * as removeEvent from "../db/deleteEvent.js";
import * as updateEvent from "./editEvent.js";
export const openEvent = (div) => {
    window.getComputedStyle(div, null).getPropertyValue("display") == "none"
        ? (div.style.display = "block")
        : (div.style.display = "none");
};

export const editEvent = (id) => {
    updateEvent.editEvent(id)
    console.log("edit");
};

export const deleteEvent = (id) => {
    console.log(id);
    removeEvent.deleteEvent(id);
};
