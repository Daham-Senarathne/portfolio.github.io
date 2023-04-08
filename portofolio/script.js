var slider = document.getElementById("slider");
function openSlider() {
    slider.style.top = "0";
    slider.classList.add("shadow");
};
function closeSlider() {
    slider.style.top = "-100%";
    slider.classList.remove("shadow");
};