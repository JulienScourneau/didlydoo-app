import { ml } from './generateDomcontent.js';
import { getAllEvents } from "./getAllEvents.js"


let eventcontent = ml("article", {class: "event"}, [
    ml("section", {class: "event__header"}, [
        ml("nav", {class: "event__header__nav"}, [
            ml("div", {class: "event__header__nav__info"}, [
                ml("h2", {class: "event__header__nav__info__title"}, "Title"),
                ml("h3", {class: "event__header__nav__info__author"}, "Author")
            ]),
            ml("div", {class: "event__header__nav__buttons"}, [
                ml("button", {class: "event__header__nav__buttons__btn", id: "edit"}, "Edit"),
                ml("button", {class: "event__header__nav__buttons__btn", id: "delete"}, "Delete"),
            ]),
        ]),

        ml("p", {class: "event__header__description"})
    ]),

]);

// let eventtable = ml("section", {class: "event__content"}, [
//     ml("table", {class: "event__content__table"}, [
//         ml("thead", {class: "event__content__table__header"},
//             ml("tr", [
//                 ml("th", {scpe:"col"}, "Members"),
//                 ml("th", {scope:"col", class:"event__content__table__date"})
//             ]),
//         ),

//         ml("tbody", {class: "event__content__table__data"}, [
//             ml("tr", [
//                 ml("th", {scpe:"row", class:"event__content__table__attendee"}, "Julien"),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 ),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 ),

//             ]),
//             ml("tr", [
//                 ml("th", {scpe:"row", class:"event__content__table__attendee"}, "Selim"),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 ),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 ),

//             ]),
//         ]),
//     ]),

// ]);

console.log(eventcontent);
const allevents = document.querySelector('.eventsection');
allevents.appendChild(eventcontent);
// eventcontent.appendChild(eventtable)

export const displayeventBox = () => {
    console.log(eventcontent) }

// let eventheader = document.querySelector('.eventheader');
// let eventbox = document.createelement('.event');
// let eventname = document.querySelector('.event__header__nav__info__title');
// let eventauthor = document.querySelector('.event__header__nav__info__author');
// let eventdescription = document.querySelector('.event__header__description');
// let eventdatesuggestion = document.querySelector('.event__content__table__date');
// let eventattendee = document.querySelector('.event__content__table__attendee');
// let attendeeavailability = document.querySelector('.event__content__table__attendee__availability');

// import data from "../../../../backend/server/db/db.json" assert {type: 'json'};
// const map = new Map(Object.entries(JSON.parse(data)));
// console.log(map)


export const displayAllEvents = async () => {
    let events = await getAllEvents();
    let displayevents = events.map(function(e) {
        return e
    })
    console.log(displayevents)
}