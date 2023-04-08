import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
gsap.registerPlugin(Flip);
const links = document.querySelectorAll("header nav ul li a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
    link.addEventListener("click", () => {
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 0.5,
            absolute: true,
            ease: "elastic.out(1,0.5)",
        });
    });
});

const scrollTracker = document.querySelector(".scroll-tracker");
const scrollTrackerTimeLine = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});
scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackerTimeLine,
    },
);