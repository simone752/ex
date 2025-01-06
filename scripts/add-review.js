document.getElementById('add-review-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const genre = document.getElementById('genre').value;
    const date = document.getElementById('date').value;

    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push({ title, description, genre, date });
    localStorage.setItem('reviews', JSON.stringify(reviews));

    alert('Review added successfully!');
    e.target.reset();
});
