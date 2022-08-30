
export const displayOrHideElement = (elem) => {
    window.getComputedStyle(elem, null).getPropertyValue("display") == "none"
        ? (elem.style.display = "block")
        : (elem.style.display = "none");
};