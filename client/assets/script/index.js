import { setupAddNewEvent } from "./modules/addNewEventListener.js";
import { getAllEvents } from "./db/getAllEvents.js";
// import { displayeventBox } from "./modules/displayAllEvents.js";
import { displayAllEvents } from "./modules/displayAllEvents.js";
getAllEvents();
setupAddNewEvent();
// setupEventListener();
// displayeventBox();
displayAllEvents();
