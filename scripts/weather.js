const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=153b212f46050da1a4554b7f6497437a&units=metric";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        }
        else {
            throw new Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp}`
    caption.innerHTML = data.weather[0].description;
    // weatherIcon.innerHTML = `${}`;
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const imageSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", imageSrc);
    weatherIcon.setAttribute("alt", data.weather[0].description)
}
