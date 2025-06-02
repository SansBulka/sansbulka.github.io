// Select all product elements
const products = document.querySelectorAll('.product');

products.forEach(product => {
    const name = product.querySelector('.name');
    const hiniolskie = product.querySelector('.hiniolskie');
    const details = product.querySelector('.details');

    product.addEventListener('mouseenter', () => {
        if (name) {
            name.style.transform = 'translateY(-20px)';
            name.style.opacity = '0';
            name.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        }
        if (hiniolskie) {
            hiniolskie.style.transform = 'translateY(-20px)';
            hiniolskie.style.opacity = '0';
            hiniolskie.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        }
        if (details) {
            details.style.opacity = '1';
            details.style.transform = 'translateY(0)';
            details.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        }
    });

    product.addEventListener('mouseleave', () => {
        if (name) {
            name.style.transform = 'translateY(0)';
            name.style.opacity = '1';
        }
        if (hiniolskie) {
            hiniolskie.style.transform = 'translateY(0)';
            hiniolskie.style.opacity = '1';
        }
        if (details) {
            details.style.opacity = '0';
            details.style.transform = 'translateY(120px)';
        }
    });
});