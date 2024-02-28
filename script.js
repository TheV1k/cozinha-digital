document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const links = document.querySelectorAll(".lista__link");
    const nothingAlert = document.getElementById("nothing-alert");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Hide all links initially
        links.forEach(function (link) {
            link.style.display = "none";
        });

        // Filter and display matching links
        const matchingLinks = Array.from(links).filter(function (link) {
            const linkText = link.textContent.toLowerCase();
            return linkText.includes(searchTerm);
        });

        if (matchingLinks.length > 0) {
            matchingLinks.forEach(function (link) {
                link.style.display = "block";
            });
            nothingAlert.style.display = "none";
        } else {
            nothingAlert.style.display = "block";
        }
    });
});
