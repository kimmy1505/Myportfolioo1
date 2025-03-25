document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const errorMessage = document.getElementById("error-message");

        if (username === "" || password === "") {
            errorMessage.textContent = "Both fields are required!";
        } else {
            errorMessage.textContent = "";
            alert("Login Successful!");
        }
    });
});