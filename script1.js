document.addEventListener("DOMContentLoaded", function () {
    const signupLink = document.getElementById("signup-link");
    const loginForm = document.getElementById("login-form");

    signupLink.addEventListener("click", function (e) {
        e.preventDefault();
        // You can replace the URL with the sign-up page URL.
        window.location.href = "newpage.html";
        
        
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "page.html";
        
        // You can add your login logic here.
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Example: Display user input in the console
        console.log("Username: " + username);
        console.log("Email: " + email);
        console.log("Password: " + password);

        

        // You can send this data to a server for authentication.
    });
});
