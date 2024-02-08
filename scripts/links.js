const baseURL = "https://P10smeyer.github.io/wdd230/";
const linksURL = "https://P10smeyer.github.io/wdd230/data/links.json";
const learningActivities = document.querySelector('.learning');
let weekIndex = 0;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data.weeks);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        let list = document.createElement('li');
        let weekNumber = weekIndex + 1;
        list.textContent = "Week 0" + weekNumber.toString() + ": ";
        list.setAttribute('class', 'weekList' + weekNumber.toString())
        let anchors = weeks[weekIndex].links;
        learningActivities.appendChild(list);
        const weekList = document.querySelector('.weekList' + weekNumber.toString());
        let anchorIndex = 1;
        index = 0;
        anchors.forEach(anchor => {
            let anchorTag = document.createElement('a');
            anchorTag.setAttribute('id', 'week' + weekNumber.toString() + '-activity' + anchorIndex);
            weekList.appendChild(anchorTag);
            const anchorElement = document.querySelector('#week' + weekNumber.toString() + '-activity' + anchorIndex);
            let anchorText = anchors[index].title;
            let anchorLink = anchors[index].url;
            anchorElement.textContent = anchorText;
            anchorElement.href = anchorLink;
            let addVerticalBar = ' | ';
            if (anchorIndex != anchors.length) {
                weekList.innerHTML += addVerticalBar;
            }
            anchorIndex++;
            index++;
        })
        weekIndex++;
    });
}

