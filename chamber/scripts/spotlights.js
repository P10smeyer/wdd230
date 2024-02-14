const spotlights = document.querySelector("#members");
const spotlightUrl = "https://P10smeyer.github.io/wdd230/chamber/data/members.json";

fetchSpotlightMembers();

async function fetchSpotlightMembers() {
    try {
        const response = await fetch(spotlightUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            spotlightMembers(data.members);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

const spotlightMembers = (members) => {
    const spotlightMembers = [];
    members.forEach(member => {
        if (member.membershipLevel === "Gold" || member.membershipLevel === "Silver")
        {
            spotlightMembers.push(member);
        }
    });
    console.log(spotlightMembers)
    const shuffledArray = spotlightMembers.sort((a, b) => 0.5 - Math.random());
    console.log(shuffledArray);
    let company1 = document.createElement('p');
    let company2 = document.createElement('p');
    let company1Website = document.createElement('a');
    let company2Website = document.createElement('a');
    company1.textContent = shuffledArray[0].company;
    company2.textContent = shuffledArray[1].company;
    company1Website.textContent = shuffledArray[0].website;
    company1Website.href = shuffledArray[0].website;
    company2Website.textContent = shuffledArray[1].website;
    company2Website.href = shuffledArray[1].website;
    console.log(shuffledArray[0].website);
    console.log(shuffledArray[1].website);
    spotlights.appendChild(company1);
    spotlights.appendChild(company1Website);
    spotlights.appendChild(company2);
    spotlights.appendChild(company2Website);
}