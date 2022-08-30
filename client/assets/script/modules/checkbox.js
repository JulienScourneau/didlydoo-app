export function displayAvailability () {
    let checkboxes = document.querySelectorAll('.checkbox')
    checkboxes.forEach(function (checkbox) {
        if (checkbox.value === "true") {
            checkbox.checked = true
        } else {
            checkbox.cheched = false
        }
    })
}


// function addCell(event, table) {
//     let eventdates = event.dates;
//     let attendees = eventdates[0].attendees;
//     let tablerow = table.querySelectorAll('.event__content__table__data__row');
//     eventdates.forEach((dt)=> {
//         let i=0;
//         for (let attendee of dt.attendees) {
//             tablerow[i].innerHTML += `<td class="event__content__table__attendee__availability"><input type="checkbox" value ="${attendee.available}"></td>`
//             i++;
//         }
//     }) 
// };
