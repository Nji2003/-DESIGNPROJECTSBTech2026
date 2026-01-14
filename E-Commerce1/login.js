document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        alert("Welcome back! Redirecting to shop...");
        window.location.href = "index.html";
    }
});

// Function for Forgot Password
function forgotPassword() {
    alert("Password reset link has been sent to your email address!");
}