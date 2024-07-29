// Attach event listeners to menu items
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const url = this.getAttribute('data-url');
        window.location.href = url; // Navigate to the URL
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the logged-in user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // If a user is logged in, update the welcome message
    if (loggedInUser) {
        const usernameElement = document.getElementById('username');
        usernameElement.textContent = capitalizeFirstLetter(loggedInUser.name);
    } else {
        // If no user is logged in, display "Guest"
        const usernameElement = document.getElementById('username');
        usernameElement.textContent = 'Guest';
    }
});

function capitalizeFirstLetter(string) {
    if (!string) return ''; // Check if the string is empty or undefined
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}