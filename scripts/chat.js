document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".chat__title");
    const texts = document.querySelectorAll(".chat__text");
    const button = document.querySelector(".chat__button");

    const checkVisibility = () => {
        const rect = title.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            title.classList.add("visible");

            texts.forEach((text, index) => {
                setTimeout(() => {
                    text.classList.add("visible");
                }, index * 200);
            });

            setTimeout(() => {
                button.classList.add("visible");
                button.classList.add("pulse");
            }, texts.length * 200 + 200);
        }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});