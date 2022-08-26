import { setupAddNewEvent } from "./modules/addNewEventListener.js";
import { setupEventListener } from "./modules/eventListener.js";
import { getAllEvents } from "./modules/getAllEvents.js";
import { displayeventBox } from "./modules/displayAllEvents.js";
getAllEvents();
setupAddNewEvent();
setupEventListener();
displayeventBox();
