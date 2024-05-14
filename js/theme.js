const toggleButton = document.getElementById('toggleMode');

function lightMode() {
    // Light mode is enabled
    document.body.removeAttribute('data-theme');
    document.getElementById('moon').style.display = 'block';
    document.getElementById('sun').style.display = 'none';
};

function darkMode() {
    // Dark mode is enabled
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
};

// Toggle between light and dark mode
toggleButton.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        // Change to Light mode
        lightMode();
    } else {
        // Change to Dark mode
        darkMode();
    }
});

// Check if the user has set a preference for a light or dark theme when the page loads
window.onload = function () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark mode is enabled
        darkMode();
    } else {
        // Light mode is enabled
        lightMode();
    }

    scrollUp();
};

// Para subir al principio de la página
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        setTimeout(scrollUp, 0);
    });
});

function scrollUp() {
    window.scrollTo({
        top: 0,
    });
}

