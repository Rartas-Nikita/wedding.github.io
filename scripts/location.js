document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('.locations__header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.classList.contains('active');
            
            // Закрываем все аккордеоны
            headers.forEach(otherHeader => {
                otherHeader.classList.remove('active');
                otherHeader.nextElementSibling.classList.remove('active');
            });
            
            // Если текущий аккордеон был закрыт, открываем его
            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });

    // Анимация появления элементов при скролле
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