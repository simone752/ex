// Hardcoded Reviews Array (example reviews, same as before)
const reviews = [
    {
        title: "Stalaggh - Projekt Misanthropia",
        description: "A deep dive into the darkness of human nature.",
        fullDescription: "This is the full description that will be revealed when clicked. It goes deeper into the details of the album and its impact.",
        genre: "Spoken Word",
        date: "2025-01-01",
        score: "9/10",
        image: "images/projekt-misanthropia.jpg"  // Add the path to your image here
    },
    {
        title: "Wolf Eyes - Burned Mind",
        description: "Wolf eyes are quite a famous band in the realm of noise and this is one of their most famous projects.",
        fullDescription: "This is the full review of the album 'Burned Mind' by Wolf Eyes. It explores the harsh and abrasive sounds and their experimental journey in noise music.",
        genre: "Power Electronics",
        date: "2024-12-15",
        score: "7/10",
        image: "images/dark-symphony.jpg"  // Add the path to your image here
    },
    // Add other reviews here
];

// Function to render reviews (with pagination)
const renderReviews = (searchQuery = "", page = 1) => {
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
            <p>${review.description}</p> <!-- Show short description initially -->
            <button class="read-more-btn">Read More</button>
            <div class="full-review" style="display: none;">
                <p>${review.fullDescription}</p> <!-- Full review content -->
                <p><strong>Genre:</strong> ${review.genre}</p>
                <p><strong>Release Date:</strong> ${review.date}</p>
                <p><strong>Score:</strong> ${review.score}</p>
            </div>
        </div>
    `).join('');

    // Add event listeners to handle "Read More" button clicks
    const buttons = document.querySelectorAll('.read-more-btn');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const fullReview = button.nextElementSibling;
            if (fullReview.style.display === "none") {
                fullReview.style.display = "block";
                button.textContent = "Read Less"; // Change button text to "Read Less"
            } else {
                fullReview.style.display = "none";
                button.textContent = "Read More"; // Change button text back to "Read More"
            }
        });
    });

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
