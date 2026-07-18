/*==================================================
        INTERNSHIP ROADMAP (Quadroid Hub)
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".roadmap-item");

    // Staggered entrance animation as each week scrolls into view
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.2 });

    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });

    // Observer callbacks are throttled in background tabs — reveal
    // anything already in view right away so nothing stays invisible
    const trigger = window.innerHeight * 0.9;

    items.forEach((item) => {
        if (item.getBoundingClientRect().top < trigger) {
            item.classList.add("visible");
            observer.unobserve(item);
        }
    });

    // Expand / collapse a week when its card is clicked
    document.querySelectorAll(".week-card").forEach((card) => {

        card.addEventListener("click", () => {

            const item = card.closest(".roadmap-item");

            // entrance stagger is done — don't delay the open/close animation
            item.style.transitionDelay = "0s";

            item.classList.toggle("open");

        });

    });

});
