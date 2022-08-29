import { getEvent } from "../db/getEvent.js";

export const editEvent = (id) => {
    let event = getEvent(id)
    event.then((json)=>{
        console.log(json);
        displayEditEvent(json)
        modifButton()
    })
};

function displayEditEvent(json) {
    let div = document.getElementById("new-event")
    div.style.display = "block"

    document.getElementById('new-name').value = json.name;
    document.getElementById('new-description').value = json.description;
    document.getElementById('new-author').value = json.author;
    // for (let element of json.dates) {
    //     // document.getElementsByClassName('new-event__date__container__date__time')[0].textContent = element.date;
    //     console.log(document.getElementById('new-event__date__container')[0].textContent);
    // }
};

function modifButton() {
    document.getElementById('add-new-event').innerHTML = "modifier"
}