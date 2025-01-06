const reviews = [
    {
        title: 'Stalaggh - Projekt Misanthropia',
        description: 'A truly disturbing horror experience that haunts your thoughts long after the game ends.',
        genre: 'Horror',
        releaseDate: '2007-01-01',
        score: '2/10',
        image: 'images/86179-projekt-misanthropia.jpg' // Add path to artwork image
    },
    {
        title: 'The Haunting of the Forgotten House',
        description: 'A chilling tale of an abandoned mansion with secrets better left buried.',
        genre: 'Supernatural',
        releaseDate: '2023-11-20',
        score: '8/10',
        image: 'images/haunting-house.jpg' // Add path to artwork image
    },
    {
        title: 'Whispers in the Dark',
        description: 'A psychological thriller that keeps you on the edge of your seat until the final moment.',
        genre: 'Thriller',
        releaseDate: '2023-10-15',
        score: '7/10',
        image: 'images/whispers-dark.jpg' // Add path to artwork image
    }
];

const renderReviews = () => {
    const container = document.getElementById('reviews-container');
    container.innerHTML = reviews.map(review => `
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
};

renderReviews();
