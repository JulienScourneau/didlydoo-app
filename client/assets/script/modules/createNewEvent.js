export const createEvent = (dateArr) => {
    let event = getNewEventInput(dateArr);
    console.log(event);
    return event;
};

const getNewEventInput = (dateArr) => {
    return {
        name: document.getElementById("new-name").value,
        description: document.getElementById("new-description").value,
        author: document.getElementById("new-author").value,
        dates: dateArr,
    };
};
