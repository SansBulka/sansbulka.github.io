document.addEventListener('DOMContentLoaded', function() {
    function isMobile() {
        return window.innerWidth <= 768;
    }

    function initFooterDropdowns() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        const infoHeader = footer.querySelector('.footer-info-title');
        const infoList = footer.querySelector('.footer-info');
        const interHeader = footer.querySelector('.inter-title');
        const interList = footer.querySelector('.footer-inter');
        const shipHeader = footer.querySelector('.ship');
        const iconList = footer.querySelector('.iconis');

        function setupDropdown(header, content) {
            // Usuwamy istniejące wskaźniki, jeśli istnieją
            const existingIndicator = header.querySelector('.dropdown-indicator');
            if (existingIndicator) {
                header.removeChild(existingIndicator);
            }

            if (isMobile()) {
                // Dodajemy strzałki tylko w widoku mobilnym
                const indicator = document.createElement('span');
                indicator.className = 'dropdown-indicator';
                indicator.innerHTML = ' ▼';
                indicator.style.marginLeft = '5px';
                header.style.cursor = 'pointer';
                header.appendChild(indicator);

                // Klonujemy element, aby usunąć wszystkie poprzednie listenery
                const newHeader = header.cloneNode(true);
                header.parentNode.replaceChild(newHeader, header);
                header = newHeader;

                header.addEventListener('click', function() {
                    content.classList.toggle('open');
                    const indicator = this.querySelector('.dropdown-indicator');
                    indicator.innerHTML = content.classList.contains('open') ? ' ▲' : ' ▼';
                });
            } else {
                // W widoku desktopowym: bez strzałek, zawsze otwarte
                header.style.cursor = 'default';
                content.classList.add('open');
            }
        }

        const dropdowns = [
            { header: infoHeader, content: infoList },
            { header: interHeader, content: interList },
            { header: shipHeader, content: iconList }
        ];

        dropdowns.forEach(item => {
            if (item.header && item.content) {
                setupDropdown(item.header, item.content);
            }
        });
    }

    // Inicjalizacja przy ładowaniu
    const footer = document.querySelector('footer');
    if (footer) {
        const observer = new MutationObserver((mutations, obs) => {
            if (footer.querySelector('.footer-info-title')) {
                initFooterDropdowns();
                obs.disconnect();
            }
        });
        observer.observe(footer, { childList: true, subtree: true });
    }

    // Aktualizacja przy zmianie rozmiaru okna
    window.addEventListener('resize', initFooterDropdowns);
});