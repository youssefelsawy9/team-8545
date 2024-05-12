document.addEventListener('DOMContentLoaded', function () {
    const donorRadio = document.getElementById('donor');
    const organizationRadio = document.getElementById('organization');
    const donorInfo = document.getElementById('donor-info');
    const organizationInfo = document.getElementById('organization-info');
    const registerButton = document.getElementById('register-button');
    const requiredInputs = document.querySelectorAll('.input-box input[required]');

    // Function to show donor info and hide organization info
    function showDonorInfo() {
        donorInfo.style.display = 'block';
        organizationInfo.style.display = 'none';
    }

    // Function to show organization info and hide donor info
    function showOrganizationInfo() {
        donorInfo.style.display = 'none';
        organizationInfo.style.display = 'block';
    }

    // Show donor info by default
    showDonorInfo();

    donorRadio.addEventListener('change', function () {
        if (donorRadio.checked) {
            showDonorInfo();
        }
    });

    organizationRadio.addEventListener('change', function () {
        if (organizationRadio.checked) {
            showOrganizationInfo();
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
});
