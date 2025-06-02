document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.polecane-produkty-container');
    const leftArrow = document.querySelector('.product-arrow.left');
    const rightArrow = document.querySelector('.product-arrow.right');

    if (container && leftArrow && rightArrow) {
        // Obsługa kliknięcia strzałki w lewo
        leftArrow.addEventListener('click', function() {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        });

        // Obsługa kliknięcia strzałki w prawo
        rightArrow.addEventListener('click', function() {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});