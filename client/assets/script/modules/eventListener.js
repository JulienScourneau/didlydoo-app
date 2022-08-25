export const setupEventListener = () => {
    document.getElementsByClassName("event")[0].addEventListener("click",() => openEvent());
};

const openEvent = () => {
    let div = document.getElementsByClassName('event__content')[0]
    if (
        window.getComputedStyle(div, null).getPropertyValue("display") == "none"
    ) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
};
