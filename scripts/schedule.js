document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".schedule-event");

    function checkVisibility() {
        events.forEach((event) => {
            const rect = event.getBoundingClientRect();

            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                event.classList.add("visible");
            }
        });
    }


    checkVisibility();


    window.addEventListener("scroll", checkVisibility);
});