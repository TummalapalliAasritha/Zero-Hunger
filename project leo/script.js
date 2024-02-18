function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        alert('Username and password are required');
    } else {
        // Perform login logic (not implemented in this example)
        alert('Login successful!');
    }
}

function validateRegistration() {
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (regUsername === '' || regPassword === '' || confirmPassword === '') {
        alert('All fields are required');

    } else(regPassword !== confirmPassword) 
    {
        alert('Passwords do not match');
    }
}
