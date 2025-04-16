// Hide loader when page is loaded
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

// Toggle navigation menu on hamburger click
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});