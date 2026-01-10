document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMsg = document.getElementById("registerError");

    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        errorMsg.textContent = "All fields are required";
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match";
        return;
    }

    errorMsg.textContent = "";
    alert("Registration form validated. Ready for backend integration.");
});
