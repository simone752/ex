const renderReviews = (filterGenre = null) => {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const filtered = filterGenre ? reviews.filter(r => r.genre === filterGenre) : reviews;

    const container = document.getElementById('reviews-container');
    container.innerHTML = filtered.map(review => `
        <div class="review">
            <h3>${review.title}</h3>
            <p>${review.description}</p>
            <p><strong>Genre:</strong> ${review.genre}</p>
            <p><strong>Date:</strong> ${review.date}</p>
        </div>
    `).join('');
};

document.getElementById('genre-filter').addEventListener('click', loadGenres);
document.getElementById('genre-dropdown').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        renderReviews(e.target.textContent);
    }
});

renderReviews();
