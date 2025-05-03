
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll('.locations__header');

    headers.forEach((header) => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');

        
            headers.forEach((otherHeader) => {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".locations__title");
    const items = document.querySelectorAll(".locations__item");

    const checkVisibility = () => {
        const rect = title.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            title.classList.add("visible");
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("visible");
                }, index * 200);
            });
        }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});