document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    console.log('Number of slides:', slides.length);
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        console.log('Showing slide:', currentSlide);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Show the first slide immediately
    showSlide(0);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Update copyright year
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});