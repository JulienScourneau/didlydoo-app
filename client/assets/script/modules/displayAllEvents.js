import { ml } from "./generateDomcontent.js";
import { getAllEvents } from "../db/getAllEvents.js";
import { getDayandMonth } from "./getSelectedDate.js";
import * as eventListener from "./eventListener.js";
import { displayOrHideElement } from "./displayOrHideElement.js";

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
                        },
                        "Delete"
                    ),
                ]),
            ]),

            ml("p", { class: "event__header__description" }, event.description),
        ]),
    ]);
}

const allevents = document.querySelector(".eventsection");

export const displayAllEvents = async () => {
    let events = await getAllEvents();
    events.forEach((e) => {
        let eventbox = displayEvent(e);

        allevents.appendChild(eventbox);
        eventbox.innerHTML += createEventTable(e);
        let tableheader = eventbox.querySelector(
            ".event__content__table__header__row"
        );
        addColumn(e, tableheader);
        let section = eventbox.querySelectorAll("section");
        section[0].addEventListener("click", (e) => {
            let button = eventbox.querySelectorAll("button");
            if (e.target !== button[0] && e.target !== button[1])
                displayOrHideElement(section[1]);
        });
        let button = eventbox.querySelectorAll("button");
        console.log(button);
        button[0].addEventListener("click", () => eventListener.editEvent(e.id));
        button[1].addEventListener("click", () => eventListener.deleteEvent(e.id));

    });
};

function createEventTable(event) {
    let tabletemplate = `<section class = "event__content">
        <table class="event__content__table">
            <thead class="event__content__table__header">
                <tr class="event__content__table__header__row">
                    <th scope="col" class="event__content__table__header__col event__content__table__header__col--members">Members</th>
                </tr>
                
            </thead>
            <tbody class= "event__content__table__data">
            </tbody>

        </table>
    </section>`;

    return tabletemplate;
}

function addColumn(event, table) {
    let eventdates = event.dates;

    eventdates.map(
        (dates) =>
            (table.innerHTML += `<th scope="col"class="vent__content__table__header__col event__content__table__header__col--date">${getDayandMonth(
                dates.date
            )}</th>
        `)
    );
}

// eventdates.map((e=>
//     output +=
//     `<th scope="col"class="vent__content__table__header__col event__content__table__header__col--date"><p>${e.date}</p></th>
//                `));

// function createColumn(date) {
//     return ml("th", {scope:"col", class:"event__content__table__header__col event__content__table__header__col--date"}, date)
// }

// return ml("section", {class: "event__content"}, [
//     ml("table", {class: "event__content__table"}, [
//         ml("thead", {class: "event__content__table__header"},
//             ml("tr", {class: "event__content__table__header__row"}, [
//                 ml("th", {scope:"col", class:"event__content__table__header__col event__content__table__header__col--members"}, "Members"),

// INPUT each date one column
//                 (eventdates.map((date) => {
//                     return createColumn(date.date)}))
//             ]),
//         ),

//         ml("tbody", {class: "event__content__table__data"}, [
//             ml("tr", {class: "event__content__table__data__row"} [
//                 ml("th", {scope:"row", class:"event__content__table__attendee"}, event.dates[1].date),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 ),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 )

//             ]),
//             ml("tr", {class: "event__content__table__header__row"}, [
//                 ml("th", {scope:"row", class:"event__content__table__attendee"}),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 ),
//                 ml("td", {class:"event__content__table__attendee__availability"},
//                 ml("input", {type: "checkbox", type:"checkbox"})
//                 ),

//             ]),
//         ]),
//     ]),

// ])

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
