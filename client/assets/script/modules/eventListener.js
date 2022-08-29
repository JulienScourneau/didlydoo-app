import * as removeEvent from "../db/deleteEvent.js";

export const openEvent = () => {
    console.log("event click");
    //window.getComputedStyle(div, null).getPropertyValue("display") == "none"? div.style.display = "block": div.style.display = "none";
};

export const editEvent = (id) => {
    
};

export const deleteEvent = (id) => {
    console.log(id);
    removeEvent.deleteEvent(id);
};
