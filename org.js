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

    const categoryButton = document.querySelector('.category-btn .selected-category');
    const filterDropdown = document.querySelector('.filter-dropdown');
    const filterContent = document.querySelector('.filter-content');

    // Get all category links
    const categoryLinks = document.querySelectorAll('.category-link');
    const cards = document.querySelectorAll('.card');

    // Function to update the selected category text
    function updateSelectedCategory(category) {
        categoryButton.textContent = category;
        // Update filter dropdown based on selected category
        updateFilterDropdown(category);
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

    // Function to update the filter dropdown based on selected category
    function updateFilterDropdown(category) {
        // Clear previous filter content
        filterContent.innerHTML = '';

        // Define filter options based on category
        let filterOptions = [];
        switch (category) {
            case 'school':
                filterOptions = ['books', 'stationery'];
                break;
            case 'food':
                filterOptions = ['fruits', 'vegetables', 'canned', 'fresh', 'baked'];
                break;
            case 'medical':
                filterOptions = ['devices', 'equipment', 'medication'];
                break;
            default:
                // No specific filters for other categories
                filterDropdown.style.display = 'none'; // Hide filter dropdown
                return;
        }

        // Populate filter dropdown with options
        filterOptions.forEach(option => {
            const filterLink = document.createElement('a');
            filterLink.href = '#';
            filterLink.textContent = option.charAt(0).toUpperCase() + option.slice(1); // Capitalize first letter
            filterContent.appendChild(filterLink);
        });

        // Display filter dropdown
        filterDropdown.style.display = 'block';
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

    // Get the donate button
 

    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle the visibility of the filter content
            const filterContent = this.nextElementSibling;
            filterContent.classList.toggle('show');
        });
    });

    // Get all cards

    // Function to show items based on selected speciality
    function showItemsBySpeciality(speciality) {
        cards.forEach(card => {
            const cardSpeciality = card.getAttribute('speciality')
            if (speciality === 'all' || cardSpeciality === speciality) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to show items based on selected organization
    function showItemsByOrganization(organization) {
        cards.forEach(card => {
            const cardOrganization = card.getAttribute('organization')
            if (organization === 'all' || cardOrganization === organization) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to show items based on selected governorate
    function showItemsByGovernorate(governorate) {
        cards.forEach(card => {
            const cardGovernorate = card.getAttribute('governorate')
            if (governorate === 'all' || cardGovernorate === governorate) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to show items based on selected area
    function showItemsByArea(area) {
        cards.forEach(card => {
            const cardArea = card.getAttribute('area')
            if (area === 'all' || cardArea === area) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Get all filter options
    const specialtyFilterOptions = document.querySelectorAll('.filter-content a[speciality]');
    specialtyFilterOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedSpeciality = this.getAttribute('speciality');
            showItemsBySpeciality(selectedSpeciality);
        });
    });
    
    // Add click event listener to each filter option for organizations
    const organizationFilterOptions = document.querySelectorAll('.filter-content a[organization]');
    organizationFilterOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedOrganization = this.getAttribute('organization');
            showItemsByOrganization(selectedOrganization);
        });
    });
    
    // Add click event listener to each filter option for governorates
    const governorateFilterOptions = document.querySelectorAll('.filter-content a[governorate]');
    governorateFilterOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedGovernorate = this.getAttribute('governorate');
            showItemsByGovernorate(selectedGovernorate);
        });
    });
    
    // Add click event listener to each filter option for areas
    const areaFilterOptions = document.querySelectorAll('.filter-content a[area]');
    areaFilterOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedArea = this.getAttribute('area');
            console.log(selectedArea);
           
            showItemsByArea(selectedArea);
        });
    });
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









