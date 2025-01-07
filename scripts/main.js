// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Identify the page based on the body or specific elements
    const isHomePage = document.querySelector("body").classList.contains("home");
    const isReviewsPage = document.querySelector("body").classList.contains("reviews");

    // Search functionality
    if (isHomePage || isReviewsPage) {
        const searchBar = document.getElementById("search-bar");
        const searchButton = document.getElementById("search-button");

        if (searchBar && searchButton) {
            searchButton.addEventListener("click", () => {
                const query = searchBar.value.toLowerCase().trim();
                if (isHomePage) {
                    // Redirect to reviews page with search query
                    window.location.href = `reviews.html?search=${encodeURIComponent(query)}`;
                } else if (isReviewsPage) {
                    // Handle search on the reviews page
                    fetch("reviews.json")
                        .then((response) => response.json())
                        .then((reviews) => {
                            const filteredReviews = reviews.filter((review) =>
                                review.text.toLowerCase().includes(query) ||
                                review.title.toLowerCase().includes(query)
                            );
                            renderReviews(filteredReviews);
                        })
                        .catch((error) => console.error("Error loading reviews:", error));
                }
            });
        }
    }

    // Render reviews only on the reviews page
    if (isReviewsPage) {
        fetch("reviews.json")
            .then((response) => response.json())
            .then((reviews) => renderReviews(reviews))
            .catch((error) => console.error("Error loading reviews:", error));
    }
});

// Render reviews function
function renderReviews(reviews) {
    const reviewsContainer = document.getElementById("reviews-container");
    if (!reviewsContainer) {
        console.error("Error: Missing essential elements in the DOM.");
        return;
    }

    reviewsContainer.innerHTML = ""; // Clear existing content
    reviews.forEach((review) => {
        const reviewElement = document.createElement("article");
        reviewElement.classList.add("review");
        reviewElement.innerHTML = `
            <h3>${review.title}</h3>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}
