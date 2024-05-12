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

    const changePasswordBtn = document.getElementById('change-password-btn');
    const changePasswordFields = document.getElementById('change-password-fields');
    const savePasswordBtn = document.getElementById('save-password-btn');

    // Add click event listener to the "Change Password" button
    changePasswordBtn.addEventListener('click', function () {
        // Toggle the visibility of the change password fields
        changePasswordFields.style.display = 'block';
        // Disable the "Change Password" button
        changePasswordBtn.disabled = true;
    });

    // Add click event listener to the "Save" button
    savePasswordBtn.addEventListener('click', function () {
        // Get the old and new passwords from the input fields
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;
        
        // Here you can implement the logic to validate the old password and update it with the new one
        // For now, let's just log them to the console
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);

        // After saving, hide the change password fields and enable the "Change Password" button
        changePasswordFields.style.display = 'none';
        changePasswordBtn.disabled = false;

        // Clear the input fields
        document.getElementById('old-password').value = '';
        document.getElementById('new-password').value = '';

        // Optionally, you can show a success message or perform other actions here
    });
});
