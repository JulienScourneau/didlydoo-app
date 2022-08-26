import {
    setupAddNewEvent,
    setupTodayDate,
} from "./modules/addNewEventListener.js";
import { setupEventListener } from "./modules/eventListener.js";
import { getAllEvents } from "./modules/getAllEvents.js";
console.log(await getAllEvents());
setupAddNewEvent();
setupEventListener();
setupTodayDate();
