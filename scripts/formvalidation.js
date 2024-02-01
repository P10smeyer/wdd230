const passwordOne = document.querySelector('#password1');
const passwordTwo = document.querySelector('#password2');
const errorMessage = document.querySelector('#wrong_password');
const submit = document.querySelector('.submit');

passwordTwo.addEventListener("change", checkSame);

function checkSame() {
    if (passwordOne.value !== passwordTwo.value) {
        // Generate Error Message and clear Values
        errorMessage.textContent = "Passwords do NOT match!"
        errorMessage.style.visibility = "show";
        passwordTwo.style.backgroundColor = "#fff0f3";
        passwordOne.value = "";
        passwordTwo.value = "";
        passwordOne.focus();
    }
    else {
        // Remove Error Message
        errorMessage.textContent = ""
        errorMessage.style.display = "none";
		passwordTwo.style.backgroundColor = "#fff";
		passwordTwo.style.color = "#000";
    }
}