import { getDataEvent } from "./getDataEvent.js";

export const getAllEvents = async () => {
    let response = await fetch(`http://localhost:3000/api/events`);
    getDataEvent(await response.json());
    //await response.json();
};
