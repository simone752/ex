document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value;
    renderReviews(searchQuery, 1); // Start from page 1
});

