let reviews = []; // Global variable to store reviews

// Fetch reviews from JSON file
const fetchReviews = async () => {
    try {
        const response = await fetch('reviews.json'); // Path to your JSON file
        if (!response.ok) throw new Error('Failed to fetch reviews.');
        reviews = await response.json();
        renderReviews(); // Render reviews after fetching
    } catch (error) {
        console.error(error);
        document.getElementById('reviews-container').innerHTML = "<p>Failed to load reviews. Please try again later.</p>";
    }
};

// Render Reviews Function
const renderReviews = (searchQuery = "", page = 1) => {
    const reviewsPerPage = 5;

    // Filter reviews by search query
    const filteredReviews = reviews.filter(review =>
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination
    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    const startIndex = (page - 1) * reviewsPerPage;
    const endIndex = page * reviewsPerPage;

    const reviewsToShow = filteredReviews.slice(startIndex, endIndex);

    // Populate Reviews
    const container = document.getElementById('reviews-container');
    container.innerHTML = reviewsToShow.map(review => `
        <div class="review">
            <img src="${review.image}" alt="${review.title} artwork">
            <h3>${review.title}</h3>
            <p>${review.description}</p>
            <p><strong>Genre:</strong> ${review.genre}</p>
            <p><strong>Release Date:</strong> ${review.date}</p>
            <p><strong>Score:</strong> ${review.score}</p>
        </div>
    `).join('');

    // Populate Pagination
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => renderReviews(searchQuery, i));
        pagination.appendChild(button);
    }
};

// Event Listener for Search
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    renderReviews(query);
});

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', fetchReviews);
