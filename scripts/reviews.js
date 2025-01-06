const reviews = [
    {
        title: "Stalaggh - Projekt Misanthropia",
        description: "A deep dive into the darkness of human nature.",
        genre: "Spoken Word",
        date: "2025-01-01",
        score: "9/10",
        image: "images/projekt-misanthropia.jpg"
    },
    // Additional reviews here...
];

const renderReviews = (searchQuery = "", page = 1) => {
    const reviewsPerPage = 5;

    // Filter reviews based on query (case-insensitive)
    const filteredReviews = reviews.filter(review =>
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle pagination
    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    const startIndex = (page - 1) * reviewsPerPage;
    const endIndex = page * reviewsPerPage;

    const reviewsToShow = filteredReviews.slice(startIndex, endIndex);

    // Populate reviews in the container
    const container = document.getElementById('reviews-container');
    if (reviewsToShow.length === 0) {
        container.innerHTML = `<p>No reviews found for "${searchQuery}".</p>`;
    } else {
        container.innerHTML = reviewsToShow.map(review => `
            <div class="review">
                <img src="${review.image}" alt="${review.title} album cover">
                <div>
                    <h3>${review.title}</h3>
                    <p>${review.description}</p>
                    <p><strong>Genre:</strong> ${review.genre}</p>
                    <p><strong>Release Date:</strong> ${review.date}</p>
                    <p><strong>Score:</strong> ${review.score}</p>
                </div>
            </div>
        `).join('');
    }

    // Update pagination
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => renderReviews(searchQuery, i));
        pagination.appendChild(button);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const initialSearchQuery = new URLSearchParams(window.location.search).get('search') || '';
    renderReviews(initialSearchQuery);
});
