import { openWeatherAPI, input } from "./index";

const currentTime = document.querySelector('.current-time');
const currentTemp = document.querySelector('.current-temp');
const feelsTemp = document.querySelector('.feels-temp');
const windSpeed = document.querySelector('.wind');

let celsius;
let feelsLikeCelsius;
let speedKPH;

function dayOrNight(dt, dawn, dusk) {
    return (dt > dawn && dt < dusk) ? "day" : "night";
}

function convertLocalTime(timezone) {
    const unix = Math.floor(Date.now() / 1000);
    const utc_ms = (parseInt(unix, 10) + parseInt(timezone, 10)) * 1000;
    const local_date = new Date(utc_ms).toUTCString().split(" ")[4];
    const [hours, minutes] = local_date.split(":");
    return `${('0'+ hours).slice(-2)}:${('0'+ minutes).slice(-2)}`;
}

function displayWeatherData(weatherJSON) {
    const currentWeather = document.querySelector('.current-weather');
    currentWeather.textContent = weatherJSON.weather[0].description;

    const weatherIcon = document.querySelector('.current-weather + img');
    weatherIcon.src = `./image/weather-png/${dayOrNight(weatherJSON.dt, weatherJSON.sys.sunrise, weatherJSON.sys.sunset)}_${weatherJSON.weather[0].main.toLowerCase()}.png`;
    weatherIcon.alt = weatherJSON.weather[0].main;

    const currentLocation = document.querySelector('.current-location');
    currentLocation.textContent = `${input.value}` || 'London';

    currentTime.textContent = convertLocalTime(weatherJSON.timezone);

    celsius = Math.floor(weatherJSON.main.temp);
    currentTemp.textContent = celsius + ' °C';

    const windDirection = document.querySelector('.wind-arrow');
    windDirection.style.transform = `rotate(${weatherJSON.wind.deg}deg)`;

    feelsLikeCelsius = Math.floor(weatherJSON.main.feels_like);
    feelsTemp.textContent = feelsLikeCelsius + ' °C';

    speedKPH = Math.round(weatherJSON.wind.speed * 36) / 10;
    windSpeed.textContent = `${speedKPH} kph`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `${weatherJSON.main.humidity}%`;
}

async function getCurrentWeatherData(lat, lon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherAPI}&units=metric`, 
        {mode: 'cors'}
    );
    const weatherData = await response.json();

    displayWeatherData(weatherData);
}

export {
    getCurrentWeatherData, 
    currentTemp, 
    currentTime, 
    feelsTemp, 
    windSpeed,
    celsius,
    feelsLikeCelsius,
    speedKPH
};