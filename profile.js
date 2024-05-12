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

    // Function to toggle visibility of role options
    function toggleRoleOptions() {
        const roleOptions = document.getElementById('role-options');
        roleOptions.style.display='block';
    }

    // Add click event listener to the "Choose Role" button
    const chooseRoleButton = document.getElementById('choose-role-btn');
    chooseRoleButton.addEventListener('click', toggleRoleOptions);

    // Get the role select element
    const roleSelect = document.getElementById('role');

    // Add change event listener to the role select element
    roleSelect.addEventListener('change', function () {
        const selectedRole = roleSelect.value;
        const doctorOptions = document.getElementById('doctor-options');
        const teacherOptions = document.getElementById('teacher-options');
        const fileUpload = document.getElementById('file');
        const saveButton = document.getElementById('save-role-btn');

        if (selectedRole === 'doctor') {
            doctorOptions.style.display = 'block';
            teacherOptions.style.display = 'none';
            fileUpload.style.display = 'block';
            saveButton.style.display = 'block';
        } else if (selectedRole === 'teacher') {
            doctorOptions.style.display = 'none';
            teacherOptions.style.display = 'block';
            fileUpload.style.display = 'block';
            saveButton.style.display = 'block';
        }
    });

    // Get the save button
    const saveButton = document.getElementById('save-role');

    // Event listener for the save button
    saveButton.addEventListener('click', function () {
        // Show the success popup when the save button is clicked
        console.log('Role saved successfully!');
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    });

    const save= document.getElementById('save-role-btn');

    // Event listener for the save button
    save.addEventListener('click', function () {
        // Show the success popup when the save button is clicked
        console.log('Role saved successfully!');
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    });
});
