// Funkcja inicjująca rozwijane filtry na mobile
function initFilterDropDown() {
    if (window.innerWidth > 900) return; // tylko mobile/tablet
    const filterSections = document.querySelectorAll('.filtry article');
    filterSections.forEach(section => {
        const header = section.querySelector('h3');
        if (!header) return;
        // Dodaj przycisk/ikonę rozwijania jeśli nie istnieje
        if (!header.querySelector('.dropdown-toggle')) {
            const btn = document.createElement('span');
            btn.className = 'dropdown-toggle';
            btn.textContent = '▼';
            btn.style.cursor = 'pointer';
            btn.style.marginLeft = '8px';
            header.appendChild(btn);
        }
        // Ukryj zawartość sekcji domyślnie
        section.classList.add('collapsed');
        // Obsługa kliknięcia
        header.onclick = function(e) {
            section.classList.toggle('collapsed');
        };
    });
}

// Automatyczna inicjalizacja po załadowaniu strony
window.addEventListener('DOMContentLoaded', initFilterDropDown);

