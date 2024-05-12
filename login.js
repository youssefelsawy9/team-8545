document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-btn');

    loginButton.addEventListener('click', function(event) {
        // Prevent the default button click behavior
        event.preventDefault();

        // Get the values of username and password inputs
        const username = usernameInput.value;
        console.log(username);
        const password = passwordInput.value;
        console

        // Check username and password values and redirect accordingly
        if (username === 'admin' && password === '1234') {
            window.location.href = 'adminMenu.html';
        } else if (username === 'donor' && password === '1234') {
            window.location.href = 'donorMenu.html';
        } else if (username === 'org' && password === '1234') {
            window.location.href = 'orgMenu.html';
        } else {
            alert('Wrong username or password. Please try again.');
        }
    });
});

