function hideOnScroll(element, scrolly) {
    if (scrolly > 0) {
        element.classList.remove("opacity-0");
        element.classList.add("opacity-1");
    } else if (scrolly == 0) {
        element.classList.remove("opacity-1");
        element.classList.add("opacity-0");
    }
}