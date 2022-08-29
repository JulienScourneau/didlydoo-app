export function getSelectedDate(input) {
    let date = new Date(input);
    date = `${date.getDate()}/${getMonth(date.getMonth())}/${date.getFullYear()}`;
    return date;
}

const getMonth = (month) => {
    return month + 1 >= 10 ? month + 1 : `0${month + 1}`;
};
