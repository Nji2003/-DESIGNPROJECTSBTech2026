// document.getElementById("loginForm").addEventListener("button", function (e) {
//     e.preventDefault();

//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();
//     const errorMsg = document.getElementById("errorMsg");

//     if (email === "" || password === "") {
//         errorMsg.textContent = "All fields are required";
//         return;
//     }
//     else{
//         function goToLanding() {
//             window.location.href = "landingpage.html";
//         }
//     }

//     // // This is where backend integration will happen
//     // // For now, just simulate validation
//     // errorMsg.textContent = "";
//     // alert("Login form validated. Ready for backend integration.");
// });
function goToLanding() {
        window.location.href = "landingpage.html";
    }

