const reviews = [
    {
        title: 'Darkness Beyond the Walls',
        description: 'A truly disturbing horror experience that haunts your thoughts long after the game ends.',
        genre: 'Horror',
        date: '2023-12-01'
    },
    {
        title: 'The Haunting of the Forgotten House',
        description: 'A chilling tale of an abandoned mansion with secrets better left buried.',
        genre: 'Supernatural',
        date: '2023-11-20'
    },
    {
        title: 'Whispers in the Dark',
        description: 'A psychological thriller that keeps you on the edge of your seat until the final moment.',
        genre: 'Thriller',
        date: '2023-10-15'
    }
];

const renderReviews = () => {
    const container = document.getElementById('reviews-container');
    container.innerHTML = reviews.map(review => `
        <div class="review">
            <h3>${review.title}</h3>
            <p>${review.description}</p>
            <p><strong>Genre:</strong> ${review.genre}</p>
            <p><strong>Date:</strong> ${review.date}</p>
        </div>
    `).join('');
};

renderReviews();
