


const iconContainer = document.querySelector(".icon-container");

const weatherContainer = document.querySelector(".weather-container");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=18.68654229051863&lon=-72.25689543267296&appid=153b212f46050da1a4554b7f6497437a&units=metric";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=18.68654229051863&lon=-72.25689543267296&appid=153b212f46050da1a4554b7f6497437a&units=metric";

async function apiFetch() {
    const response = await fetch(url);
    const forecast = await fetch(forecastUrl);

    const data = await response.json();
    const forecastData = await forecast.json();
    // console.log(data);
    console.log(forecastData);
    displayCurrentWeather(data);
    displayForecastWeather(forecastData);
}

apiFetch();

function displayCurrentWeather(data) {
    const temperature = document.createElement("p");
    const description = document.createElement("p");
    const high = document.createElement("p");
    const low = document.createElement("p");
    const humidity = document.createElement("p");
    const sunrise = document.createElement("p");
    const sunset = document.createElement("p");
    const icon = document.createElement("img");
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("src", iconSrc);
    icon.setAttribute("alt", data.weather[0].description);
    icon.setAttribute("loading", "lazy");
    icon.className = "icon";

    temperature.innerHTML = `<strong>${data.main.temp}&deg C</strong>`;
    description.innerHTML = `<strong>${data.weather[0].description}</strong>`;
    high.innerHTML = `High: <strong>${data.main.temp_max}&deg C</strong>`;
    low.innerHTML = `Low: <strong>${data.main.temp_min}&deg C</strong>`;
    humidity.innerHTML = `Humidity: <strong>${data.main.humidity}%</strong>`;
    sunrise.innerHTML = `Sunrise: <strong>${formatTime(data.sys.sunrise)}</strong>`;
    sunset.innerHTML = `Sunset: <strong>${formatTime(data.sys.sunset)}</strong>`;


    iconContainer.appendChild(icon);
    weatherContainer.appendChild(temperature);
    weatherContainer.appendChild(description);
    weatherContainer.appendChild(high);
    weatherContainer.appendChild(low);
    weatherContainer.appendChild(humidity);
    weatherContainer.appendChild(sunrise);
    weatherContainer.appendChild(sunset);
}

function displayForecastWeather(forecastData) {
    const todayTemp = document.createElement("p");
    const nextDayTemp = document.createElement("p");
    const dayAfterTemp = document.createElement("p");

    const forecastWeather = document.querySelector(".forecast-weather");

    todayTemp.innerHTML = `${formatDate(forecastData.list[2].dt)}: <strong>${forecastData.list[2].main.temp}&degC</strong>`;
    nextDayTemp.innerHTML = `${formatDate(forecastData.list[10].dt)}: <strong>${forecastData.list[10].main.temp}&degC</strong>`;
    dayAfterTemp.innerHTML = `${formatDate(forecastData.list[18].dt)}: <strong>${forecastData.list[18].main.temp}&degC</strong>`;

    forecastWeather.appendChild(todayTemp);
    forecastWeather.appendChild(nextDayTemp);
    forecastWeather.appendChild(dayAfterTemp);
}
/**
 * Converts a Unix timestamp (in seconds) to a formatted time string (e.g., "08:30 AM").
 * @param {number} unixTime - The Unix timestamp in seconds.
 * @returns {string} The formatted time string.
 */
function formatTime(unixTime) {

    // Accepts only parameters in milliseconds
    const time = new Date(unixTime * 1000);
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const formattedTime = time.toLocaleTimeString([], options);
    return formattedTime;
}

function formatDate(unixCode) {
    const date = new Date(unixCode * 1000);
    const option = {
        weekday: "long",
    }

    const formattedDate = date.toLocaleDateString("en-Us", option)
    return formattedDate
}