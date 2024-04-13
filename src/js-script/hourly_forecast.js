import { checkTimeFormat, checkTempFormat } from "./index";

function displayHourForecast(hourlyForecastJSON, dayForecastDiv) {
    dayForecastDiv.textContent = '';

    hourlyForecastJSON.forEach((obj) => {
        const hourDiv = document.createElement('div');
        const time = checkTimeFormat(obj.time.split(" ")[1]);
        const weather = obj.condition;
        const forecastTemp = checkTempFormat(Math.floor(obj.temp_c));

        hourDiv.innerHTML = `
            <p class="hour">${time}</p>
            <img src="${weather.icon}" alt="${weather.text}">
            <p class="hour-forecast-temp">${forecastTemp}</p>
        `;
        dayForecastDiv.appendChild(hourDiv);
    });
}

export default displayHourForecast;