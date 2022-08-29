import { getEvent } from "../db/getEvent.js";

export const editEvent = (id) => {
    let event = getEvent(id)
    event.then((json)=>{
        console.log(json);
    })
};
