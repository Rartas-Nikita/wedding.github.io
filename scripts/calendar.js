document.addEventListener("DOMContentLoaded", function () {
    const eventBlock = document.querySelector('.event');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0, 
        rootMargin: "-200px 0px" 
    });

    observer.observe(eventBlock);
});