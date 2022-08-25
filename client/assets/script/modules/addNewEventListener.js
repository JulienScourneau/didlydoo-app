export const setupAddNewEvent = () => {
    document.getElementById("addevent").addEventListener("click", () => openAddNewEvent());
}


const openAddNewEvent = () =>{
    let div = document.getElementById('new-event')
    if (
        window.getComputedStyle(div, null).getPropertyValue("display") == "none"
    ) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}
