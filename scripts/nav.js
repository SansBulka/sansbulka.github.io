window.addEventListener('scroll', () => {
    if (window.innerWidth > 720) {
        const searchBar = document.querySelector('nav');
        if (window.scrollY > 0) {
            searchBar.style.backgroundColor = 'black';
        } else {
            searchBar.style.backgroundColor = 'transparent';
        }
    }
});

document.addEventListener('click', () => {
    if (window.innerWidth > 720) {
        const searchBar = document.querySelector('nav');
        if (document.querySelector('.hamburger').classList.contains('open')) {
            searchBar.style.backgroundColor = 'black';
        } else if (window.scrollY === 0) {
            searchBar.style.backgroundColor = 'transparent';
        }
    }
});