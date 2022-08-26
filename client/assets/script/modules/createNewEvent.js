const getNewEventInput = () => {
    let inputName = document.getElementById("new-name").value;
    let inputDescription = document.getElementById("new-description").value;
    let inputAuthor = document.getElementById("new-author").value;
    let dateArray = getDateInput();
    return {
        name: inputName,
        description: inputDescription,
        author: inputAuthor,
        date: dateArray,
    };
};

const getDateInput = () => {
    let dateInput = [];
    dateInput.push(document.getElementById("new-date").value);
    return dateInput;
};

export const createEvent = () => {
    let event = getNewEventInput();
    console.log(event);
    
};
