import { ml } from './generateDomcontent.js';
import { getAllEvents } from "./getAllEvents.js"


function displayEvent (event) {
    return ml("article", {class: "event"}, [
        ml("section", {class: "event__header"}, [
            ml("nav", {class: "event__header__nav"}, [
                ml("div", {class: "event__header__nav__info"}, [
                    ml("h2", {class: "event__header__nav__info__title"}, event.name),
                    ml("h3", {class: "event__header__nav__info__author"}, event.author)
                ]),
                ml("div", {class: "event__header__nav__buttons"}, [
                    ml("button", {class: "event__header__nav__buttons__btn", id: "edit"}, "Edit"),
                    ml("button", {class: "event__header__nav__buttons__btn", id: "delete"}, "Delete"),
                ]),
            ]),

            ml("p", {class: "event__header__description"}, event.description)
        ]),

        ml("section", {class: "event__content"}, [
            ml("table", {class: "event__content__table"}, [
                ml("thead", {class: "event__content__table__header"},
                    ml("tr", {class: "event__content__table__header__row"}, [
                        ml("th", {scpe:"col"}, "Members"),
                        ml("th", {scope:"col", class:"event__content__table__date"}, 
                            ml("p", {class:"date"}, event.dates[0].date)
                    )]),
                ),
        
                ml("tbody", {class: "event__content__table__data"}, [
                    ml("tr", {class: "event__content__table__data__row"} [
                        ml("th", {scpe:"row", class:"event__content__table__attendee"}, event.dates[1].date),
                        ml("td", {class:"event__content__table__attendee__availability"},
                        ml("input", {type: "checkbox", type:"checkbox"})
                        ),
                        ml("td", {class:"event__content__table__attendee__availability"},
                        ml("input", {type: "checkbox", type:"checkbox"})
                        )
        
                    ]),
                    ml("tr", {class: "event__content__table__header__row"}, [
                        ml("th", {scope:"row", class:"event__content__table__attendee"}),
                        ml("td", {class:"event__content__table__attendee__availability"},
                        ml("input", {type: "checkbox", type:"checkbox"})
                        ),
                        ml("td", {class:"event__content__table__attendee__availability"},
                        ml("input", {type: "checkbox", type:"checkbox"})
                        ),
        
                    ]),
                ]),
            ]),

        ]),
    ])

    
}

// export const displayeventBox = () => {
    
//     allevents.appendChild(eventcontent);
//     return eventcontent
//      }

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


const allevents = document.querySelector('.eventsection');

export const displayAllEvents = async () => {
    let events = await getAllEvents();
    events.forEach((e) => {
        allevents.appendChild(displayEvent(e))
    })
}


// var jsonData = `{ "rows": [ [ "EzE8xZ31zfC", "R7TPl8q81Ft", "47.0" ], [ "hTUspcBc4Yn", "R7TPl8q81Ft", "50.6" ], [ "EzE8xZ31zfC", "xGojHNSrFAj", "40.0" ], [ "E31SemmmFGb", "xGojHNSrFAj", "74.8" ], [ "hTUspcBc4Yn", "xGojHNSrFAj", "77.0" ], [ "E31SemmmFGb", "R7TPl8q81Ft", "47.0" ] ] }`;

// //Converting JSON string to JS Object
// var obj = JSON.parse(jsonData);
// document.getElementById("demo").innerHTML = obj["rows"]
//   .map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td>`).join("")

/**
//  * retrieves dates and participants for the event tables
//  * @param {*} response 
//  */
//  export function displayDatesEvent(response) {
//     const eventbox = document.querySelector(".event");
//     for (let dates of response[0].dates) {
//       eventbox.innerHTML = dates.map(date => `<th scope="col" class="event__content__table__date">${date}</th>`).join("");
//     }
//   }
