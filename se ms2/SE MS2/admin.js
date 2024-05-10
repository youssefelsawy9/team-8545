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

    // Get all accept buttons
    const acceptButtons = document.querySelectorAll('.accept-btn');

    // Add click event listener to each accept button
    acceptButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the parent card element
            const card = this.closest('.card');
            if (card) {
                card.remove();
            }
        });
    });

    // Get all reject buttons
    const rejectButtons = document.querySelectorAll('.reject-btn');

    // Add click event listener to each reject button
    rejectButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the parent card element
            const card = this.closest('.card');
            if (card) {
                card.remove();
            }
        });
    });
});
