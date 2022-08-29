export const checkInput = () => {
    if (
        !document.getElementById("new-name").checkValidity() ||
        !document.getElementById("new-author").checkValidity() ||
        !document.getElementById("new-date").checkValidity()
    )
        return false;
    return true;
};
