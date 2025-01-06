document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');
    const paginationContainer = document.getElementById('pagination');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    let reviews = [];
    let currentPage = 1;
    const reviewsPerPage = 5;

    // Fetch reviews from JSON
    fetch('reviews.json')
        .then(response => response.json())
        .then(data => {
            reviews = data;
            renderReviews();
        });

    // Render reviews
    function renderReviews(searchQuery = '', page = 1) {
        const filteredReviews = reviews.filter(review =>
            review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            review.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
        const start = (page - 1) * reviewsPerPage;
        const paginatedReviews = filteredReviews.slice(start, start + reviewsPerPage);

        reviewsContainer.innerHTML = paginatedReviews.map(review => `
            <div class="review">
                <img src="${review.image}" alt="${review.title}">
                <h3>${review.title}</h3>
                <p>${review.description}</p>
                <p><strong>Genre:</strong> ${review.genre}</p>
                <p><strong>Release Date:</strong> ${review.date}</p>
                <p><strong>Score:</strong> ${review.score}</p>
            </div>
        `).join('');

        renderPagination(totalPages, searchQuery);
    }

    // Render pagination
    function renderPagination(totalPages, searchQuery) {
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.onclick = () => {
                currentPage = i;
                renderReviews(searchQuery, i);
            };
            if (i === currentPage) button.classList.add('active');
            paginationContainer.appendChild(button);
        }
    }

    // Search functionality
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        currentPage = 1;
        renderReviews(query, currentPage);
    });
});
