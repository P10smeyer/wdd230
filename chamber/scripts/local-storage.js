const visitsDisplay = document.querySelector(".visits");
const msToDays = 86400000;
const date = Date.now();
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let pastDate = Number(window.localStorage.getItem("pastDate-ls")) || date;
let firstVisit = document.querySelector(".firstVisit");
let backSoSoon = document.querySelector(".backSoSoon");
let lastVisited = document.querySelector(".lastVisited");

if ((date - pastDate) > msToDays) {
    backSoSoon.textContent = `Back so soon! Awesome!`;
}
else {
    backSoSoon.textContent = "";
    let days = (date - pastDate) / msToDays;
    lastVisited.textContent = `You last visited ${days.toFixed(0)} days ago.`;
}

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} 
else {
    numVisits = 1;
    visitsDisplay.textContent = numVisits;
	firstVisit.textContent = `Welcome! Let us know if you have any questions.`;
    lastVisited.textContent = "";
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("pastDate-ls", pastDate);