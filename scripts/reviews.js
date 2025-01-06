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
    },
    {
        title: "Maurizio Bianchi - Symphony for a Genocide",
        description: "A dark and impactful industrial release.",
        genre: "Death Industrial",
        date: "1981-01-01",
        score: "7.5/10",
        image: "images/symphony-genocide.jpg"
    },
    {
        title: "Impetuous Ritual - Blight Upon Martyred Sentience",
        description: "A cavernous death metal release.",
        genre: "Dissonant Death Metal",
        date: "2017-01-01",
        score: "5.5/10",
        image: "images/blight-upon.jpg"
    },
    {
        title: "Pharmakon - Bestial Burden",
        description: "A visceral journey through industrial soundscapes.",
        genre: "Death Industrial",
        date: "2014-01-01",
        score: "6.5/10",
        image: "images/bestial-burden.jpg"
    }
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

// Initialize reviews on page load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search') || '';
    renderReviews(searchQuery);
});
