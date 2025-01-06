// Hardcoded Reviews Array
const reviews = [
    {
        title: "Projekt Misanthropia",
        description: "A dark journey through dystopian landscapes, blending industrial beats with haunting melodies.",
        genre: "Industrial",
        date: "2024-01-01",
        image: "images/projekt-misanthropia.jpg", // Static image path
        score: "9/10"
    },
    {
        title: "The Silent Echo",
        description: "A slow-building horror, where silence is the most terrifying element.",
        genre: "Horror",
        date: "2023-12-15",
        image: "images/silent-echo.jpg", // Static image path
        score: "8/10"
    },
    {
        title: "Phantom Frequencies",
        description: "Soundscapes that manipulate the listener's perception of time and space.",
        genre: "Experimental",
        date: "2024-02-01",
        image: "images/phantom-frequencies.jpg", // Static image path
        score: "7/10"
    },
    {
        title: "Noisy Nightmares",
        description: "An eerie auditory experience where noises blur into the fabric of nightmares.",
        genre: "Noise",
        date: "2024-03-05",
        image: "images/noisy-nightmares.jpg",
        score: "6/10"
    },
    {
        title: "The Black Wave",
        description: "A journey into the unknown, with a soundtrack that drowns you in darkness.",
        genre: "Darkwave",
        date: "2023-11-22",
        image: "images/black-wave.jpg",
        score: "9/10"
    },
    {
        title: "Cacophony of Souls",
        description: "Chaotic, relentless noise that will challenge the listener's mind.",
        genre: "Noise",
        date: "2024-04-10",
        image: "images/cacophony-souls.jpg",
        score: "5/10"
    }
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
