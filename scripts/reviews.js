const reviews = [
    {
        title: "Stalaggh - Projekt Misanthropia",
        description: "A deep dive into the darkness of human nature.",
        genre: "Spoken Word",
        date: "2025-01-01",
        score: "9/10",
        image: "images/projekt-misanthropia.jpg"
    },
    // ... rest of the reviews
];

const renderReviews = (searchQuery = "", page = 1) => {
    // Same functionality as before
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search') || '';
    renderReviews(searchQuery);
});

