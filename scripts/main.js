document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".main__content");

    const checkVisibility = () => {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                element.classList.add("visible");
            }
        });
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});