const password = document.getElementById("password");
const cPassword = document.getElementById("cPassword");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");



function confirmPassword() {
    const password = document.getElementById("password");
    const cPassword = document.getElementById("cPassword");
    if (password.value === cPassword.value) {
        confirm.setCustomValidity(" ");
    } else {
        confirm.setCustomValidity("Passwords do not match");
    }
}


