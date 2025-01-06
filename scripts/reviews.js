// Search functionality for homepage
const reviews = [
    {
        title: "Stalaggh - Projekt Misanthropia",
        description: "A deep dive into the darkness of human nature.",
        genre: "Spoken Word",
        date: "2025-01-01",
        score: "9/10",
        image: "images/projekt-misanthropia.jpg"
    },
    {
        title: "Wolf Eyes - Burned Mind",
        description: "Wolf eyes are quite a famous band in the realm of noise...",
        genre: "Power Electronics",
        date: "2024-12-15",
        score: "7/10",
        image: "images/dark-symphony.jpg"
    }
];


const renderReviews = (searchQuery = "") => {
    const filteredReviews = reviews.filter(review =>
        review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const container = document.getElementById('reviews-container');
    container.innerHTML = filteredReviews.map(review => `
        <div class="review">
            ${review.image ? `<img src="${review.image}" alt="${review.title} artwork">` : ""}
            <h3>${review.title}</h3>
            <p>${review.description}</p>
            <p><strong>Release Date:</strong> ${review.date}</p>
            <p><strong>Score:</strong> ${review.score}</p>
        </div>
    `).join('');
};

// Add event listener for search
document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-input').value;
    renderReviews(searchQuery);
});

// Initial render
renderReviews();


// Initialize the reviews list and apply search if a query is provided
const initialSearchQuery = new URLSearchParams(window.location.search).get('search') || '';
renderReviews(initialSearchQuery);
