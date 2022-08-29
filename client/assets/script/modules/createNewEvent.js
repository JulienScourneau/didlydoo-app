export const createEvent = (dateArr) => {
    let event = getNewEventInput(dateArr);
    return event
};

const getNewEventInput = (dateArr) => {
    let inputName = document.getElementById("new-name").value;
    let inputDescription = document.getElementById("new-description").value;
    let inputAuthor = document.getElementById("new-author").value;
    let dateArray = dateArr;
    return {
        name: inputName,
        description: inputDescription,
        author: inputAuthor,
        dates: dateArray,
    };
};
