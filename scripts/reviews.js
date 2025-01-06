const reviews = [
    { title: 'Wolf Eyes - Burned Mind', description: 'Wolf eyes are quite a famous band in the realm of noise and this is one of their most famous projects, often times quoted as a gateway album in the musical genre known as noise. Each song is a compendium of noises (static screeches, buzzes, feedback and so on) and screams with the clear intention of creating an atmosphere as dark and abrasive as possible. Most of the songs on here work perfectly and coherently to this theme of oppression and violence, though in the second half the musical ideas become less powerful like on "Urine Burn" or "Ancient Delay". All considered a solid release and a good starting point to venture in the dark underground of noise music.', genre: 'Noise', releaseDate: '2007-01-01', score: '7/10', image: 'images/86179-projekt-misanthropia.jpg' },
    { title: 'Stalaggh - Projekt Misanthropia', description: 'A chilling tale of abuse and despair through the screams of the victims. Becomes tedious after a while, lacks the inventiveness and variety of "Whitehouse" "Bird Seed", genre: 'Experimental', releaseDate: '2007-11-20', score: '3/10', image: 'images/86179-projekt-misanthropia.jpg' },
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
const reviewsPerPage = 5;

const renderReviews = () => {
    const container = document.getElementById('reviews-container');
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const reviewsToDisplay = reviews.slice(startIndex, endIndex);

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
    document.getElementById('next-page').disabled = currentPage * reviewsPerPage >= reviews.length;
};

const changePage = (direction) => {
    currentPage += direction;
    renderReviews();
};

// Initially render all reviews
renderReviews();



