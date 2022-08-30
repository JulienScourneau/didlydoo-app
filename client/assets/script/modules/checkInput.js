export const checkInput = () => {
    if (
        !document.getElementById("new-name").checkValidity() ||
        !document.getElementById("new-author").checkValidity() ||
        !document.getElementById("new-date").checkValidity()
    )
        return false;
    return true;
};

export const displayErrorMessage = () => {
    if (!document.getElementById("new-name").checkValidity()){
        alert("Entrer un nom")
        return;
    }
    if (!document.getElementById("new-author").checkValidity()){
        alert("Entrer un auteur")
        return;
    }
    if (!document.getElementById("new-date").checkValidity()){
        alert("Entrer une date")
    }
};
