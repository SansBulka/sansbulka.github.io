window.initHamburgerMenu = function() {
    const hamburgers = document.querySelectorAll('.hamburger');
    const menu = document.querySelector('.hamburburExtended');
    const nav = document.querySelector('nav');
    if (!hamburgers.length || !menu || !nav) return;

    menu.style.transform = 'translateX(100%)';
    menu.style.transition = 'transform 0.3s ease';

    // Zawsze ustawiamy czarne tło dla nawigacji
    nav.style.backgroundColor = 'black';

    // Obsługa kliknięcia dla wszystkich przycisków hamburger
    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();

            // Przełączanie klasy open dla wszystkich hamburgerów
            hamburgers.forEach(h => h.classList.toggle('open'));

            const isOpen = hamburger.classList.contains('open');
            menu.style.transform = isOpen ? 'translateX(0)' : 'translateX(100%)';
            nav.style.backgroundColor = 'black'; // Zawsze czarne tło
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });
    });

    document.addEventListener('click', (e) => {
        const anyHamburgerOpen = Array.from(hamburgers).some(h => h.classList.contains('open'));

        if (
            anyHamburgerOpen &&
            !menu.contains(e.target) &&
            !Array.from(hamburgers).some(h => h.contains(e.target))
        ) {
            hamburgers.forEach(h => h.classList.remove('open'));
            menu.style.transform = 'translateX(100%)';
            nav.style.backgroundColor = 'black'; // Zawsze czarne tło
            document.body.style.overflow = 'auto';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 720) {
            hamburgers.forEach(h => h.classList.remove('open'));
            menu.style.transform = 'translateX(100%)';
            nav.style.backgroundColor = 'black'; // Zawsze czarne tło
            document.body.style.overflow = 'auto';
        }
    });
};