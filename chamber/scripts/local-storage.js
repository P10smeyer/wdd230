const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let firstVisit = document.querySelector(".firstVisit");

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
    numVisits = 1;
    visitsDisplay.textContent = numVisits;
	firstVisit.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);