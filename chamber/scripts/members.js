const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".card");
const url = "https://P10smeyer.github.io/wdd230/chamber/data/members.json";

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

fetchMembers();

async function fetchMembers() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data.members);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults (data) {
    i = 1;
    members.forEach(member => {
        let eachCard = document.querySelector("#card" + i.toString());
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let company = document.createElement('h3');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('p');
        card.setAttribute('id', "card-" + i.toString());
        logo.setAttribute('src', member.icon);
        company.textContent = member.company;
        address.textContent = member.address;
        phoneNumber.textContent = member.phoneNumber;
        website.textContent = member.website;
        website.href = member.website;
        membershipLevel.textContent = "Membership Level: " + member.membershipLevel;
        cards.appendChild(card);
        eachCard.appendChild(logo);
        eachCard.appendChild(company);
        eachCard.appendChild(address);
        eachCard.appendChild(phoneNumber);
        eachCard.appendChild(website);
        eachCard.appendChild(membershipLevel);
    });
}