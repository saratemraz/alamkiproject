document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('close-banner');
    const banner = document.getElementById('top-banner');

    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#mainCarousel');
    var items = myCarousel.querySelectorAll('.carousel-item');
    var currentIndex = 0;

    function showSlide(index) {
        items[currentIndex].classList.remove('active');
        currentIndex = index;
        items[currentIndex].classList.add('active');
    }

    myCarousel.querySelector('.carousel-control-next').addEventListener('click', function() {
        var nextIndex = (currentIndex + 1) % items.length;
        showSlide(nextIndex);
    });

    myCarousel.querySelector('.carousel-control-prev').addEventListener('click', function() {
        var prevIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(prevIndex);
    });

    // لتفعيل الشريحة الأولى
    items[currentIndex].classList.add('active');
});
