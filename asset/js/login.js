document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const loginForm = document.getElementById('loginForm');

    // Add an event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Perform your authentication logic here (this is a simple example)
        if (email === 'your@example.com' && password === 'yourpassword') {
            alert('Login successful'); // Replace with your desired action
        } else {
            alert('Login failed. Please check your credentials.'); // Replace with your desired action
        }
    });
});
