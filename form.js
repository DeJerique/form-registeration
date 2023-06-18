
if (document.getElementById('registration-form')) {
    document.getElementById('registration-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');

        var username = usernameInput.value;
        var password = passwordInput.value;

        // Store the username and password in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to the sign-in page after registration
        setTimeout(function () {
            window.location.href = 'signin.html';
        }, 3000);
    });
}

// Sign-in form
if (document.getElementById('signin-form')) {
    document.getElementById('signin-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');

        var username = usernameInput.value;
        var password = passwordInput.value;

        // Retrieve stored username and password from local storage
        var storedUsername = localStorage.getItem('username');
        var storedPassword = localStorage.getItem('password');

        // Check if entered credentials match stored values
        if (username === storedUsername && password === storedPassword) {
            // Successful sign-in
            alert('Sign-in successful! Redirecting to another website...');

            setTimeout(function () {
                window.location.href = 'https://dejeriques-password-generator.vercel.app/'; // Replace with the desired website URL
            }, 3000);
        } else {
            // Invalid credentials
            alert('Invalid username or password. Please try again.');
        }
    });
}

