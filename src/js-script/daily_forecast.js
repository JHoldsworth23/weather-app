import { checkTempFormat } from "./index";

function displayWeekForecast(weekForecastJSON, fiveDaysForecast) {
    fiveDaysForecast.textContent = '';

    const interval = 8;
    const weekForecastArr = [];
    for (let i = 7; i < weekForecastJSON.list.length; i=i+interval) {
        weekForecastArr.push(weekForecastJSON.list[i]);
    }

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    weekForecastArr.forEach((dayForecast) => {
        const day = new Date(dayForecast.dt_txt.split(' ')[0]);
        const weather = dayForecast.weather[0];
        const forecastTemp = checkTempFormat(Math.floor(dayForecast.main.temp));
        const forecastTempFeelsLike = checkTempFormat(Math.floor(dayForecast.main.feels_like));

        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `
            <p class="day">${dayNames[day.getDay()]}</p>
            <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
            <p class="forecast-temp">${forecastTemp}</p>
            <p>${forecastTempFeelsLike}</p>
        `;
        fiveDaysForecast.appendChild(dayDiv);
    });
}

export default displayWeekForecast;