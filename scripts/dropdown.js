document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.nyga > h3');

    headers.forEach(header => {
        const arrow = document.createElement('span');
        arrow.className = 'dropdown-arrow';

        arrow.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;

        header.appendChild(arrow);
        const dropDown = header.nextElementSibling;
        header.style.cursor = 'pointer';

        header.addEventListener('click', function() {
            dropDown.classList.toggle('active');
            arrow.classList.toggle('active');

            if (dropDown.classList.contains('active')) {
                dropDown.style.maxHeight = dropDown.scrollHeight + 'px';

                setTimeout(function() {
                    dropDown.style.maxHeight = 'none';
                }, 500);
            } else {
                dropDown.style.maxHeight = dropDown.scrollHeight + 'px';

                setTimeout(function() {
                    dropDown.style.maxHeight = '0';
                }, 10);
            }
        });
    });
});