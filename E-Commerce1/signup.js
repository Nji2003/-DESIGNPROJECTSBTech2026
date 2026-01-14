document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsChecked = document.getElementById('terms').checked;
    const errorMessage = document.getElementById('errorMessage');

    // 1. Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Error: Passwords do not match!";
        errorMessage.style.display = "block";
        return;
    }

    // 2. Check if terms are agreed to
    if (!termsChecked) {
        errorMessage.textContent = "Error: You must agree to the Terms of Service.";
        errorMessage.style.display = "block";
        return;
    }

    // 3. Success!
    errorMessage.style.display = "none";
    alert("Account successfully created!");
    
    // Redirect to landing page
    window.location.href = "index.html"; 
});