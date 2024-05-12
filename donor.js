document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown buttons
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    // Add click event listener to each dropdown button
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Toggle the visibility of the dropdown content
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Get the category button
    const categoryButton = document.querySelector('.category-btn .selected-category');

    // Get all category links
    const categoryLinks = document.querySelectorAll('.category-link');
    const cards = document.querySelectorAll('.card');

    // Function to update the selected category text
    function updateSelectedCategory(category) {
        categoryButton.textContent = category;
    }

    // Function to show items based on selected category
    function showItems(category) {
        cards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listener for category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedCategory = this.dataset.category;
            updateSelectedCategory(selectedCategory);
            showItems(selectedCategory);
        });
    });
});
