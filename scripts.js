document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const hamburgerDropdown = document.getElementById('hamburger-dropdown');

    hamburgerIcon.addEventListener('click', function () {
        const isVisible = hamburgerDropdown.style.display === 'block';
        hamburgerDropdown.style.display = isVisible ? 'none' : 'block';
    });
});




