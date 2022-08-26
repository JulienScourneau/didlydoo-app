import { getDataEvent } from "./getDataEvent.js";

export const getAllEvents = async () => {
  let response = await fetch(`http://localhost:3000/api/events`);
  let result = await response.json();
  getDataEvent(result);
  return result
};