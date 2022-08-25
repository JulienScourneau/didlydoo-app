export const setupAddNewEvent = () => {
    document.getElementById("addevent").addEventListener("click", () => openAddNewEvent());
}


const openAddNewEvent = () =>{
    if (
        window.getComputedStyle(div, null).getPropertyValue("display") == "none"
    ) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}
