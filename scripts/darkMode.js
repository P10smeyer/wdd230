const myBtn = document.querySelector("#dark-mode");
const main = document.querySelector("main");

myBtn.addEventListener('click', () => {
    if (myBtn.textContent = "🕶️") {
        myBtn.textContent = "🔆";
    }
    else {
        myBtn.textContent = "🕶️"
        main.classList.toggle('dark');
    }
	// main.classList.toggle('dark');
	// myBtn.classList.toggle('dark');
});