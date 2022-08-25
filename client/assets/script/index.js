import { getSelectedDate } from "./modules/getSelectedDate.js";
import { setupAddNewEvent } from "./modules/addNewEventListener.js";
import { setupEventListener } from "./modules/eventListener.js";
setupAddNewEvent()
setupEventListener()
console.log(getSelectedDate(1496275200000));
