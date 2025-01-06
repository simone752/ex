// Function to handle the search functionality on the homepage
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        window.location.href = `reviews.html?search=${encodeURIComponent(query)}`;
    }
});

// Display a welcome message dynamically
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to The Cabinet of Extremities!");
});

// Scroll to Top Button Functionality
const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


