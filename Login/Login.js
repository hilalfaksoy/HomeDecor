const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    console.log("Sign-up button clicked");
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    console.log("Sign-in button clicked");
    container.classList.remove("sign-up-mode");
});

function registerUser(event) {
    event.preventDefault(); // Prevent form submission
    console.log("Register user function called");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const registerMessage = document.getElementById('registerMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!emailRegex.test(email)) {
        registerMessage.textContent = "Invalid email format.";
        return;
    }

    if (!passwordRegex.test(password)) {
        registerMessage.textContent = "Password must be at least 8 characters long and contain letters, numbers, and special characters.";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log("Existing users:", users);

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        registerMessage.textContent = "An account with this email already exists.";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    registerMessage.style.color = 'green';
    registerMessage.textContent = "Registration successful!";
    console.log("User registered successfully");
}

function capitalizeFirstLetter(string) {
    if (!string) return ''; // Check if the string is empty or undefined
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function loginUser(event) {
    event.preventDefault(); // Prevent form submission
    console.log("Login user function called");

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log("Existing users:", users);

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        
        loginMessage.style.color = 'green';
        loginMessage.textContent = `Welcome, ${capitalizeFirstLetter(user.name)}!`;
        console.log("Login successful");

         // Redirect to landing page
         window.location.href = '../Landing-Product Listing/landingPage.html'; // Update this with the actual landing page URL

    } else {
        loginMessage.textContent = "Invalid email or password.";
        console.log("Login failed");
    }
}



