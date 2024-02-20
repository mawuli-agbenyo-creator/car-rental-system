var buttonRegister = document.querySelector(".btn");
function userDetails() {
    event.preventDefault();
    var fullName = document.getElementById("registerName").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("registerConfirmPassword").value;
    var department = document.getElementById("department").value;
    var user = {
        fullName,
        email,
        password,
        confirmPassword,
        department
    };
    try {
        localStorage.setItem("user", JSON.stringify(user));
        // Change the URL to your desired  page if the local storage is not empty
        if (localStorage.getItem("user") !== null) window.location.href = "../index.html";
    } catch (error) {
        console.error("Error storing data:", error);
    // Handle error appropriately, e.g., display an error message to the user
    }
}
buttonRegister.addEventListener("click", userDetails);

//# sourceMappingURL=signup.672b80b5.js.map
