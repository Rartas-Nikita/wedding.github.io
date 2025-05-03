document.addEventListener("DOMContentLoaded", function () {
    const block = document.querySelector(".confirmation");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    
                    block.classList.add("visible");
                    
                    observer.unobserve(block);
                }
            });
        },
        {
            threshold: 0.1, 
        }
    );

    if (block) {
        observer.observe(block);
    }
});