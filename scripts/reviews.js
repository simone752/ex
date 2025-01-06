// Hardcoded Reviews Array (example reviews, same as before)
const reviews = [
    // Your review objects go here
];

// Function to render reviews (with pagination)
const renderReviews = (searchQuery = "", page = 1) => {
    // Filter reviews based on the search query (check title and description)
    const filteredReviews = reviews.filter(review =>
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const reviewsPerPage = 5;
    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    const start = (page - 1) * reviewsPerPage;
    const end = page * reviewsPerPage;

    const reviewsToShow = filteredReviews.slice(start, end);

    const container = document.getElementById('reviews-container');
    container.innerHTML = reviewsToShow.map(review => `
        <div class="review">
            ${review.image ? `<img src="${review.image}" alt="${review.title} artwork">` : ""}
            <h3>${review.title}</h3>
            <p>${review.description}</p>
            <p><strong>Genre:</strong> ${review.genre}</p>
            <p><strong>Release Date:</strong> ${review.date}</p>
            <p><strong>Score:</strong> ${review.score}</p>
        </div>
    `).join('');

    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => renderReviews(searchQuery, i));
        pagination.appendChild(button);
    }
};

// Initialize the reviews list and apply search if a query is provided
const initialSearchQuery = new URLSearchParams(window.location.search).get('search') || '';
renderReviews(initialSearchQuery);

