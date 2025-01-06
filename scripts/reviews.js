// Hardcoded Reviews Array (example reviews, same as before)
const reviews = [
    {
        title: "Stalaggh - Projekt Misanthropia",
        description: "A deep dive into the darkness of human nature.",
        genre: "Spoken Word",
        date: "2025-01-01",
        score: "9/10",
        image: "images/projekt-misanthropia.jpg"  // Add the path to your image here
    },
    {
        title: "Wolf Eyes - Burned Mind",
        description: "Wolf eyes are quite a famous band in the realm of noise and this is one of their most famous projects, often times quoted as a gateway album in the musical genre known as noise. Each song is a compendium of noises (static screeches, buzzes, feedback and so on) and screams with the clear intention of creating an atmosphere as dark and abrasive as possible. Most of the songs on here work perfectly and coherently to this theme of oppression and violence, though in the second half the musical ideas become less powerful like on "Urine Burn" or "Ancient Delay". All considered a solid release and a good starting point to venture in the dark underground of noise music.",
        genre: "Power Electronics",
        date: "2024-12-15",
        score: "7/10",
        image: "images/dark-symphony.jpg"  // Add the path to your image here
    },

{
        title: "Maurizio Bianchi - Symphony for a Genocide",
        description: "Symphony for a Genocide is a power electronic/death industrial project from 1981 by the Italian noise master Maurizio Bianchi. This project paints the stark and dehumanizing atmosphere of the concentration camps during WWII. The name of the tracks remind us of these places of terror and the music in them is mechanic, unrelenting and repetitive, like a dementia infused version of Throbbing Gristle. The music doesn't reach the intensity of other acts, but the emotional impact in the listener is powerful. While listening to this record you can clearly imagine the agony and oppression of the inhabitants of these prisons. The repetitiveness of their tasks without hope for their future is well represented by the constant noises you'll hear that become iincreasingly insufferable after a while. One of the most creative and dark releases in power electronics.",
        genre: "Power Electronics",
        date: "1981-01-01",
        score: "7,5/10",
        image: "images/projekt-misanthropia.jpg"  // Add the path to your image here
    },

    {
        title: "Impetuous Ritual - Blight Upon Martyred Sentience",
        description: "Dark and mysterious. A cavernous death metal release",
        genre: "Dissonant Death Metal",
        date: "2017-01-01",
        score: "5,5/10",
        image: "images/projekt-misanthropia.jpg"  // Add the path to your image here
    },

        {
        title: "Vein - Errorzone",
        description: "A deep dive into the darkness of human nature.",
        genre: "Mathcore",
        date: "2025-01-01",
        score: "5,5/10",
        image: "images/projekt-misanthropia.jpg"  // Add the path to your image here
    },

                    {
        title: "Pharmakon - Bestial Burden",
        description: "A deep dive into the darkness of human nature.",
        genre: "Death Industrial",
        date: "2014-01-01",
        score: "6,5/10",
        image: "images/projekt-misanthropia.jpg"  // Add the path to your image here
    },
        
    // Add more reviews here as needed
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

