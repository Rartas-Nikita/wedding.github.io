document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".invitation__title");
    const lines = document.querySelectorAll(".invitation__line");

    const checkVisibility = () => {
        const rect = title.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            title.classList.add("visible");
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.classList.add("visible");
                }, index * 200);
            });
        }
    };


    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});