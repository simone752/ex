// Function to handle the search functionality on the homepage
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        window.location.href = `reviews.html?search=${encodeURIComponent(query)}`;
    }
});

// Display a welcome message dynamically
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to The Underground Blog!");
});

