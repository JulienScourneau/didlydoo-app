export const setupAddNewEvent = () => {
    document
        .getElementById("addevent")
        .addEventListener("click", () => openAddNewEvent());
};


const openAddNewEvent = () => {
    let div = document.getElementById("new-event");
    window.getComputedStyle(div, null).getPropertyValue("display") == "none"? div.style.display = "block": div.style.display = "none";
}