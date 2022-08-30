import { ml } from "./generateDomcontent.js";
import { getAllEvents } from "../db/getAllEvents.js";
import { getDayandMonth } from "./getSelectedDate.js";
import * as eventListener from "./eventListener.js";
import {displayOrHideElement} from "./displayOrHideElement.js"
import { displayAvailability } from "./checkbox.js";

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
        let tableheader = eventbox.querySelector('.event__content__table__header__row');
        let tablebody = eventbox.querySelector('tbody');
        addColumn(e, tableheader);
        addRow(e, tablebody);
        addCell(e,tablebody);
        displayAvailability();
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
    eventdates.map((dates)=> 
        table.innerHTML += `<th scope="col"class="vent__content__table__header__col event__content__table__header__col--date">${getDayandMonth(dates.date)}</th>
        `);
}


function addRow(event, table) {
    let eventdates = event.dates;
    console.log(eventdates)
    let attendees = eventdates[0].attendees;
    attendees.map((attendees)=> 
        table.innerHTML += `
                            <tr class="event__content__table__data__row">
                                <th scope="col" class="event__content__table__attendee">
                                ${attendees.name}
                                </th>
                            </tr>
                            `
    );
}

function addCell(event, table) {
    let eventdates = event.dates;
    let attendees = eventdates[0].attendees;
    let tablerow = table.querySelectorAll('.event__content__table__data__row');
    eventdates.forEach((dt)=> {
        let i=0;
        for (let attendee of dt.attendees) {
            tablerow[i].innerHTML += `<td class="event__content__table__attendee__availability"><input type="checkbox" class="checkbox" value ="${attendee.available}"></td>`
            i++;
        }
    }) 
};