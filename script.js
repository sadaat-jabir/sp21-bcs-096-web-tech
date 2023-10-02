
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add your signup logic here.
        // For this example, let's navigate to a new page.
        window.location.href = "page.html";
    });
});