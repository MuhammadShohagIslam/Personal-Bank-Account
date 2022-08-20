// add event listener to the submit login button
document.getElementById("submitLogin").addEventListener("click", function () {
    // get email field from the login input field
    const emailLoginField = document.getElementById("loginEmail");
    // get email value from the login input field
    const emailLoginFieldValue = document.getElementById("loginEmail").value;
    // get password field from the login password field;
    const passwordLoginField = document.getElementById("loginPassword");
    // get password value from the login password field;
    const passwordLoginFieldValue =
        document.getElementById("loginPassword").value;

    // checking is it login user or not
    if (
        emailLoginFieldValue === "m@gmail.com" &&
        passwordLoginFieldValue === "a"
    ) {
        emailLoginField.value = "";
        passwordLoginField.value = "";
        // if it is true, redirect bank page
        window.location.href = "http://127.0.0.1:5500/bank.html";
    } else {
        alert("Please Enter Valid Email or Password");
    }
});
