const myBtn = document.querySelector(".dark-mode");
const darkLogo = document.querySelector('#dark-logo')
const main = document.querySelector("main");
const mainHeader = document.querySelector(".main-header");

myBtn.addEventListener('click', () => {
    if (darkLogo.textContent == "🕶️") {
        darkLogo.textContent = "🔆";
        main.classList.toggle('dark');
        // mainHeader.classList.toggle('dark');
    }
    else {
        darkLogo.textContent = "🕶️";
        main.classList.toggle('dark');
    }
	myBtn.classList.toggle('dark');
});

// myBtn.addEventListener('click', () => {
//     if (myBtn.textContent = "🕶️") {
//         myBtn.textContent = "🔆";
//     }
//     else {
//         myBtn.textContent = "🕶️"
//         // main.classList.toggle('dark');
//     }
// 	// main.classList.toggle('dark');
// 	myBtn.classList.toggle('dark');
// });

// navElement.classList.toggle('open');