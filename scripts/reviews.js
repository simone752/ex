const reviews = [
    { title: 'Darkness Beyond the Walls', description: 'A truly disturbing horror experience...', genre: 'Horror', releaseDate: '2023-12-01', score: '9/10', image: 'images/your-image.jpg' },
    { title: 'The Haunting of the Forgotten House', description: 'A chilling tale of an abandoned mansion...', genre: 'Supernatural', releaseDate: '2023-11-20', score: '8/10', image: 'images/your-image.jpg' },
    { title: 'Whispers in the Dark', description: 'A psychological thriller that keeps you on the edge...', genre: 'Thriller', releaseDate: '2023-10-15', score: '7/10', image: 'images/your-image.jpg' },
    { title: 'Nightmare in the Depths', description: 'A haunting journey into the abyss...', genre: 'Horror', releaseDate: '2023-09-25', score: '8/10', image: 'images/your-image.jpg' },
    { title: 'The Silent Watcher', description: 'An eerie presence stalks the shadows...', genre: 'Mystery', releaseDate: '2023-08-30', score: '9/10', image: 'images/your-image.jpg' },
    { title: 'Echoes of the Past', description: 'Uncover the horrors of an ancient curse...', genre: 'Supernatural', releaseDate: '2023-07-12', score: '6/10', image: 'images/your-image.jpg' },
    { title: 'The Last Breath', description: 'Survival horror at its darkest...', genre: 'Survival', releaseDate: '2023-06-20', score: '7/10', image: 'images/your-image.jpg' },
    { title: 'Fallen Shadows', description: 'A tale of lost souls and forgotten sins...', genre: 'Drama', releaseDate: '2023-05-05', score: '8/10', image: 'images/your-image.jpg' },
    { title: 'Scream in the Night', description: 'The terror is real and it’s out to get you...', genre: 'Thriller', releaseDate: '2023-04-14', score: '8/10', image: 'images/your-image.jpg' },
    { title: 'Graveyard Shift', description: 'Something lurks in the graveyard...', genre: 'Horror', releaseDate: '2023-03-22', score: '9/10', image: 'images/your-image.jpg' },
    { title: 'Into the Abyss', description: 'The deeper you go, the darker it gets...', genre: 'Adventure', releaseDate: '2023-02-01', score: '7/10', image: 'images/your-image.jpg' }
];

let currentPage = 1;
let reviewsPerPage = 5;
let filteredReviews = reviews;

const renderReviews = () => {
    const container = document.getElementById('reviews-container');
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const reviewsToDisplay = filteredReviews.slice(startIndex, endIndex);

    container.innerHTML = reviewsToDisplay.map(review => `
        <div class="review">
            <div class="review-container">
                <img src="${review.image}" alt="${review.title} Artwork">
                <div>
                    <h3>${review.title}</h3>
                    <p>${review.description}</p>
                    <p><strong>Genre:</strong> ${review.genre}</p>
                    <p><strong>Release Date:</strong> ${review.releaseDate}</p>
                    <p><strong>Score:</strong> ${review.score}</p>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage * reviewsPerPage >= filteredReviews.length;
};

const searchReviews = () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    filteredReviews = reviews.filter(review =>
        review.title.toLowerCase().includes(query) ||
        review.description.toLowerCase().includes(query) ||
        review.genre.toLowerCase().includes(query)
    );
    currentPage = 1; // Reset to the first page after search
    renderReviews();
};

const filterReviews = () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    if (query) {
        searchReviews();
    }
};

// Change page for pagination
const changePage = (direction) => {
    currentPage += direction;
    renderReviews();
};

// Initially render all reviews
renderReviews();

