document.addEventListener("DOMContentLoaded", function () {
    const weddingDate = new Date("2025-06-14T13:30:00+03:00"); // 14 июня 2025 года, 13:30 по МСК

    function updateCountdown() {
        const now = new Date();
        const diff = weddingDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }
    const countdownElement = document.querySelector('.countdown');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countdownElement.classList.add('visible');
                setInterval(updateCountdown, 1000);
                updateCountdown();
                observer.unobserve(countdownElement);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(countdownElement);
});