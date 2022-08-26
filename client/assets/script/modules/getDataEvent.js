/**
 * retrieves id, name, author and description for the event tables
 * @param {*} response 
 */
export function getDataEvent(response) {
    for (let event of response) {
  getDatesEvent(response)
  }
}

/**
 * retrieves dates and participants for the event tables
 * @param {*} response 
 */
 export function getDatesEvent(response) {
  for (let dates of response[0].dates) {

  }
}