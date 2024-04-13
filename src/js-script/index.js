import { getCurrentWeatherData, currentTemp, currentTime, feelsTemp, windSpeed, celsius, feelsLikeCelsius, speedKPH } from "./current_weather";
import { getWeatherForecast } from "./weather_forecast";
import { checkInput, error } from "./form";
import gitHubFooter from "./footer";
import "../style.css";

const openWeatherAPI = 'b27c46842b98db969dffe3b1226f126f';

const input = document.querySelector('input');
const search = document.querySelector('.search');

const timeFormatBtn = document.querySelector('.time-format');
const tempFormat = document.querySelector('.temp-format');

let twelveHours = false;
let imperial = false;

function checkTimeFormat(timeString) {
    if (twelveHours) {
        const [hourString, minuteString] = timeString.split(':');
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ':' + minuteString + (hour < 12 ? ' AM' : ' PM');
    } else {
        const [time, meridiem] = timeString.split(' ');
        const [hour, minute] = time.split(':');
        let changeHours = parseInt(hour)
        if (meridiem === 'PM') {changeHours += 12}
        return `${('0' + changeHours).slice(-2)}:${minute}`;
    }
}

function checkTempFormat(temp) {
    return imperial 
      ? Math.floor((temp * 9/5) + 32) + ' °F' 
      : temp + ' °C';
}

function checkWindUnit(speed) {
    return imperial 
      ? Math.round(speed * 6.21371) / 10 + ' mph' 
      : speed + ' kph';
}

async function getCoordinates(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${openWeatherAPI}`, 
        {mode: 'cors'}
    );
    const coordinateData = await response.json();
    const { lat, lon } = coordinateData[0];

    getCurrentWeatherData(lat, lon);
    getWeatherForecast(lat, lon);
}

getCoordinates('London');

search.addEventListener('click', () => {
    if (checkInput()) {
        error.textContent = '';
        getCoordinates(input.value)
          .catch(() => {error.textContent = 'Location not found. Please try again.'});
    }
});

document.body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (checkInput()) {
            error.textContent = '';
            getCoordinates(input.value)
                .catch(() => {error.textContent = 'Location not found. Please try again.'});
        }
    }
});

timeFormatBtn.addEventListener('click', () => {
    twelveHours = !twelveHours;
    currentTime.textContent = checkTimeFormat(currentTime.textContent);
});

tempFormat.addEventListener('click', () => {
    imperial = !imperial;
    currentTemp.textContent = checkTempFormat(celsius);
    feelsTemp.textContent = checkTempFormat(feelsLikeCelsius);
    windSpeed.textContent = checkWindUnit(speedKPH);
    tempFormat.textContent = imperial ? 'Display °C' : 'Display °F';
});

gitHubFooter();

export { 
    openWeatherAPI,
    input,
    timeFormatBtn,
    tempFormat, 
    checkTimeFormat,
    checkTempFormat,
    checkWindUnit,
};