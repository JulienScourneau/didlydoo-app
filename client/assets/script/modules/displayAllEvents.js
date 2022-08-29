import { ml } from "./generateDomcontent.js";
import { getAllEvents } from "../db/getAllEvents.js";
import * as eventListener from "./eventListener.js";
import {displayOrHideElement} from "./displayOrHideElement.js"

let section = "";
let content = "";
function displayEvent(event) {
    return ml("article", { class: "event" }, [
        ml("section", { class: "event__header" }, [
            ml("nav", { class: "event__header__nav" }, [
                ml("div", { class: "event__header__nav__info" }, [
                    ml(
                        "h2",
                        { class: "event__header__nav__info__title" },
                        event.name
                    ),
                    ml(
                        "h3",
                        { class: "event__header__nav__info__author" },
                        event.author
                    ),
                ]),
                ml("div", { class: "event__header__nav__buttons" }, [
                    ml(
                        "button",
                        {
                            class: "event__header__nav__buttons__btn",
                            id: "edit",
                            onclick: function () {
                                eventListener.editEvent(event.id);
                            },
                        },
                        "Edit"
                    ),
                    ml(
                        "button",
                        {
                            class: "event__header__nav__buttons__btn",
                            id: "delete",
                            onclick: function () {
                                eventListener.deleteEvent(event.id);
                            },
                        },
                        "Delete"
                    ),
                ]),
            ]),

            ml("p", { class: "event__header__description" }, event.description),
        ]),

        ml("section", { class: "event__content" }, [
            ml("table", { class: "event__content__table" }, [
                ml(
                    "thead",
                    { class: "event__content__table__header" },
                    ml("tr", { class: "event__content__table__header__row" }, [
                        ml("th", { scpe: "col" }, "Members"),
                        ml(
                            "th",
                            {
                                scope: "col",
                                class: "event__content__table__date",
                            },
                            ml("p", { class: "date" }, event.dates[0].date)
                        ),
                    ])
                ),

                // ml("tbody", {class: "event__content__table__data"}, [
                //     ml("tr", {class: "event__content__table__data__row"} [
                //         ml("th", {scpe:"row", class:"event__content__table__attendee"}, event.dates[1].date),
                //         ml("td", {class:"event__content__table__attendee__availability"},
                //         ml("input", {type: "checkbox", type:"checkbox"})
                //         ),
                //         ml("td", {class:"event__content__table__attendee__availability"},
                //         ml("input", {type: "checkbox", type:"checkbox"})
                //         )

                //     ]),
                //     ml("tr", {class: "event__content__table__header__row"}, [
                //         ml("th", {scope:"row", class:"event__content__table__attendee"}),
                //         ml("td", {class:"event__content__table__attendee__availability"},
                //         ml("input", {type: "checkbox", type:"checkbox"})
                //         ),
                //         ml("td", {class:"event__content__table__attendee__availability"},
                //         ml("input", {type: "checkbox", type:"checkbox"})
                //         ),

                //     ]),
                // ]),
            ]),
        ]),
    ]);
}

const allevents = document.querySelector(".eventsection");

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

export const displayAllEvents = async () => {
    let events = await getAllEvents();
    events.forEach((e) => {
        let event = displayEvent(e);
        let section = event.querySelectorAll("section");
        section[0].addEventListener("click", (e) => {
            let button = event.querySelectorAll("button");
            if (e.target !== button[0] && e.target !== button[1]) displayOrHideElement(section[1]);
        });
        allevents.appendChild(event);
    });
    //console.log("a:" +displayevents)
};
