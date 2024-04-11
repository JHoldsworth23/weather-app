import { openWeatherAPI, timeFormatBtn, tempFormat } from "./index";
import displayWeekForecast from "./daily_forecast";
import displayHourForecast from "./hourly_forecast";

const weatherAPI = 'dcb884b7c7f4487cbca185100242903';

function activateButton(button) {
    const activeBtn = document.querySelector('.active');
    activeBtn.classList.remove('active');
    button.classList.add('active');
}

function displayWeatherForecast(hourlyForecastJSON, weekForecastJSON) {
    const currentDT = Math.floor(Date.now() / 1000);
    const dayForecastJSON = hourlyForecastJSON[0].hour
      .concat(hourlyForecastJSON[1].hour)
      .filter(obj => {if (currentDT < obj.time_epoch) return obj})
      .slice(0, 24);

    const chanceOfRain = dayForecastJSON[0].chance_of_rain;
    const precipitation = document.querySelector('.precipitation');
    precipitation.textContent = `${chanceOfRain}%`;

    const weekForecastBtn = document.querySelector('.week-forecast-btn');
    const weekForecastDiv = document.querySelector('.week-forecast');

    const dayForecastBtn = document.querySelector('.day-forecast-btn');
    const dayForecastDiv = document.querySelector('.day-forecast');

    weekForecastDiv.textContent = '';

    weekForecastBtn.addEventListener('click', () => {
        activateButton(weekForecastBtn);
        dayForecastDiv.textContent = '';
        displayWeekForecast(weekForecastJSON, weekForecastDiv);
    });

    dayForecastBtn.addEventListener('click', () => {
        activateButton(dayForecastBtn);
        weekForecastDiv.textContent = '';
        displayHourForecast(dayForecastJSON, dayForecastDiv);
    });

    timeFormatBtn.addEventListener('click', () => {
        if (dayForecastDiv.textContent) displayHourForecast(dayForecastJSON, dayForecastDiv);
    })

    tempFormat.addEventListener('click', () => {
        dayForecastDiv.textContent ? displayHourForecast(dayForecastJSON, dayForecastDiv) : displayWeekForecast(weekForecastJSON, weekForecastDiv);
    });

    const weekOrDayForecast = document.querySelector('.active');
    weekOrDayForecast.classList.contains('week-forecast-btn') 
      ? displayWeekForecast(weekForecastJSON, weekForecastDiv) 
      : displayHourForecast(dayForecastJSON, dayForecastDiv);
}

async function getWeatherForecast(lat, lon) {
    const weatherApiResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${lat},${lon}&days=2`,
        { mode: 'cors'}
    );
    const dayForecastData = await weatherApiResponse.json();

    const openWeatherApiResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherAPI}&units=metric`,
        { mode: 'cors' }
    );
    const weekForecastJSON = await openWeatherApiResponse.json();

    displayWeatherForecast(dayForecastData.forecast.forecastday, weekForecastJSON);
}

export { getWeatherForecast };