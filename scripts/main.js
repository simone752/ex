document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const reviewsContainer = document.getElementById('reviews-container');

    if (!searchButton || !searchBar || !reviewsContainer) {
        console.error('Error: Missing essential elements in the DOM.');
        return;
    }

    // Function to load reviews
    async function loadReviews() {
        try {
            const response = await fetch('reviews.json');
            const reviews = await response.json();
            return reviews;
        } catch (error) {
            console.error('Error loading reviews:', error);
            return [];
        }
    }

    // Function to render reviews
    async function renderReviews(searchQuery = '') {
        const reviews = await loadReviews();
        const query = searchQuery.toLowerCase();

        // Filter reviews based on the search query
        const filteredReviews = reviews.filter(review =>
            review.title.toLowerCase().includes(query) || 
            review.description.toLowerCase().includes(query)
        );

        // Populate the reviews container
        reviewsContainer.innerHTML = filteredReviews.length
            ? filteredReviews.map(review => `
                <div class="review">
                    <img src="${review.image}" alt="${review.title}">
                    <h3>${review.title}</h3>
                    <p>${review.description}</p>
                    <p><strong>Genre:</strong> ${review.genre}</p>
                    <p><strong>Release Date:</strong> ${review.date}</p>
                    <p><strong>Score:</strong> ${review.score}</p>
                </div>
            `).join('')
            : '<p>No reviews found matching your search.</p>';
    }

    // Add event listener for the search button
    searchButton.addEventListener('click', () => {
        const searchQuery = searchBar.value.trim();
        renderReviews(searchQuery);
    });

    // Load all reviews on page load
    renderReviews();
});
