export const setupEventListener = () => {
    document.getElementsByClassName("event__header")[0].addEventListener("click",() => openEvent());
};

const openEvent = () => {
    let div = document.getElementsByClassName('event__content')[0];
    window.getComputedStyle(div, null).getPropertyValue("display") == "none"? div.style.display = "block": div.style.display = "none";
};
