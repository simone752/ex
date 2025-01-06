const loadGenres = () => {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const genres = [...new Set(reviews.map(r => r.genre))];
    const dropdown = document.getElementById('genre-dropdown');
    dropdown.innerHTML = genres.map(genre => `<li>${genre}</li>`).join('');
    dropdown.classList.remove('hidden');
};
