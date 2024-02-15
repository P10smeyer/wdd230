const myBtn = document.querySelector(".banner-button");
const bannerMenu = document.querySelector('.hide-banner')
const main = document.querySelector("main");
const date = new Date();
const eventDetails = document.querySelector("#toggle");
let day = date.getDay();
console.log(day);

if (day === 1 || day === 2 || day === 3) {
    bannerMenu.style.display = "block";
}
else {
    bannerMenu.style.display = "none";
}

myBtn.addEventListener('click', () => {
    if (myBtn.textContent == "❌") {
        myBtn.textContent = "See Upcoming Event";
        eventDetails.style.visibility = 'hidden';
    }
    else {
        myBtn.textContent = "❌";
        eventDetails.style.visibility = 'visible';
    }
});

