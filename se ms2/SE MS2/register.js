document.addEventListener('DOMContentLoaded', function () {
    const donorRadio = document.getElementById('donor');
    const organizationRadio = document.getElementById('organization');
    const organizationInfo = document.getElementById('organization-info');
    const registerButton = document.getElementById('register-button');
    const requiredInputs = document.querySelectorAll('.input-box input[required]');


    donorRadio.addEventListener('change', function () {
        if (donorRadio.checked) {
            organizationInfo.style.display = 'none';
        }
    });

    organizationRadio.addEventListener('change', function () {
        if (organizationRadio.checked) {
            organizationInfo.style.display = 'block';
        }
    });

    registerButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Check if all required fields are filled
        let allFilled = true;
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });

        if (allFilled) {
            // Check which radio button is checked and redirect accordingly
            if (donorRadio.checked) {
                window.location.href = 'donorMenu.html';
            } else if (organizationRadio.checked) {
                window.location.href = 'orgMenu.html';
            }
        } else {
            alert('Please fill in all required fields.');
        }
    });




// Function to display the popup with a message


});
