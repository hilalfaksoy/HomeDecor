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
  