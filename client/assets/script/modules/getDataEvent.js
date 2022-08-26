/**
 * retrieves id, name, author and description for the event tables
 * @param {*} response 
 */
export function getDataEvent(response) {
    for (let event of response) {
  console.log(response);

  console.log(event.id);
  console.log(event.name);
  console.log(event.author);
  console.log(event.description);
  getDatesEvent(response)
  }
}

/**
 * retrieves dates and participants for the event tables
 * @param {*} response 
 */
 export function getDatesEvent(response) {
  for (let dates of response[0].dates) {
    console.log(dates);
  }
}