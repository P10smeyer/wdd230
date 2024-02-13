const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const forecast = document.querySelector('#forecast');
// 41.22191002014456, -111.96995357060042
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.22&lon=-111.97&appid=ffae934cc4bea759feae8937ac8cbfc8&units=imperial';
const threeDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.22&lon=-111.97&appid=ffae934cc4bea759feae8937ac8cbfc8&units=imperial';

async function currentWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function threeDayForecast() {
    try {
        const response = await fetch(threeDayUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data.list);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

currentWeather();
threeDayForecast();

function displayWeather (data) {
    currentTemp.innerHTML = data.main.temp + ' &deg;F';
    const icon = data.weather[0].icon;
    const iconsrc = 'https://openweathermap.org/img/w/' + icon + '.png'; 
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

const displayForecast = (data) => {
    let i = 0;
    let j = 0;
    let n = 8;
    data.forEach(list => {
        if (j === 0 || j % 8 === 0)
        {
            if (i < 3)
            {
                let paragraph = document.createElement('p');
                let pIdTag = 'day-' + (i + 1).toString();
                let daySpan = document.createElement('span');
                let tempSpan = document.createElement('span');
                let iconSpan = document.createElement('img');
                let weatherDescSpan = document.createElement('span');
                const icon = list.weather[0].icon;
                const iconsrc = 'https://openweathermap.org/img/w/' + icon + '.png'; 
                let day = list.dt_txt;
                let desc = list.weather[0].description;
                let temp = list.main.temp + ' &deg;F';
                paragraph.setAttribute('id', 'day-' + (i + 1).toString());
                iconSpan.setAttribute('src', iconsrc);
                iconSpan.setAttribute('alt', desc);
                // paragraph.textContent = "Day: " + (i + 1).toString() + ", ";
                daySpan.innerHTML = day;
                tempSpan.innerHTML = temp;
                iconSpan.innerHTML = iconSpan;
                weatherDescSpan.innerHTML = desc;
                forecast.appendChild(paragraph);
                let pElement = document.getElementById(pIdTag);
                pElement.appendChild(daySpan)
                pElement.appendChild(tempSpan);
                pElement.appendChild(iconSpan);
                pElement.appendChild(weatherDescSpan);
                i++;
            }
        }
        j++;
    });
}

