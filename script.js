const input = document.querySelector('input');
const search = document.querySelector('.search');

const currentTime = document.querySelector('.current-time');
const timeFormatBtn = document.querySelector('.time-format');
const currentTemp = document.querySelector('.current-temp');
const feelsTemp = document.querySelector('.feels-temp');
const windSpeed = document.querySelector('.wind');
const tempFormat = document.querySelector('.temp-format');

let celsius;
let feelsLikeCelsius;
let speedKPH;

const openWeatherAPI = 'b27c46842b98db969dffe3b1226f126f';
const weatherAPI = 'dcb884b7c7f4487cbca185100242903'
let twelveHours = false;
let imperial = false;
// Needs to make it env for this API Key

function convertLocalTime(timezone) {
    const unix = Math.floor(Date.now() / 1000);
    const utc_ms = (parseInt(unix, 10) + parseInt(timezone, 10)) * 1000;
    const local_date = new Date(utc_ms).toUTCString().split(" ")[4];
    const [hours, minutes] = local_date.split(":");
    return `${('0'+ hours).slice(-2)}:${('0'+ minutes).slice(-2)}`;
}

function changeTimeFormat(timeString) {
    twelveHours = !twelveHours;
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

function changeTempFormat(temp) {
    return imperial 
      ? Math.floor((temp * 9/5) + 32) + ' °F' 
      : temp + ' °C';
}

function changeWindUnit(speed) {
    return imperial 
      ? Math.round(speed * 6.21371) / 10 + ' mph' 
      : speed + ' kph';
}

function displayWeatherData(weatherJSON) {
    const currentWeather = document.querySelector('.current-weather');
    currentWeather.textContent = weatherJSON.weather[0].description;

    const currentLocation = document.querySelector('.current-location');
    currentLocation.textContent = `${input.value}`;

    currentTime.textContent = convertLocalTime(weatherJSON.timezone);

    celsius = Math.floor(weatherJSON.main.temp);
    currentTemp.textContent = celsius + ' °C';

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
    // console.log(weatherData);
    displayWeatherData(weatherData);
}

// function displayWeekForecast(weekForecastJSON) {
//     const weekDiv = document.querySelector('.week-forecast');
//     weekDiv.textContent = '';
//     const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     weekForecastJSON.forEach((dayForecast) => {
//         const day = new Date(dayForecast.date);
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <h2>${dayNames[day.getDay()]}</h2>
//             <p>${Math.floor(dayForecast.day.avgtemp_c)}</p>
//             <p>${Math.floor(dayForecast.day.mintemp_c)}</p>
//             <h3>${dayForecast.day.condition.text}</h3>
//         `;
//         weekDiv.appendChild(div);
//     });
// }

// function displayWeatherForecast(forecastJSON) {
//     const currentDT = Math.floor(Date.now() / 1000);
//     const dayForecast = forecastJSON[0].hour
//       .concat(forecastJSON[1].hour)
//       .filter(obj => {if (currentDT < obj.time_epoch) return obj})
//       .slice(0, 24);
       
//     console.log('DAY FORECAST:');
//     console.log(dayForecast);

//     const weekForecastBtn = document.querySelector('.week-forecast-btn');
//     weekForecastBtn.addEventListener('click', () => {
//         displayWeekForecast(forecastJSON.slice(1, 8));
//     });
// }

// async function getWeatherForecast(lat, lon) {
//     const response = await fetch(
//         `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${lat},${lon}&days=8`,
//         { mode: 'cors'}
//     );
//     const weatherForecastData = await response.json();

//     displayWeatherForecast(weatherForecastData.forecast.forecastday);
// }

async function getCoordinates(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${openWeatherAPI}`, 
        {mode: 'cors'}
    );
    const coordinateData = await response.json();
    const { lat, lon } = coordinateData[0];

    getCurrentWeatherData(lat, lon);
    // getWeatherForecast(lat, lon);
}

search.addEventListener('click', () => {
    getCoordinates(input.value)
        .catch((err) => console.error('Error:', err));
});

document.body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getCoordinates(input.value)
          .catch((err) => console.error('Error:', err));
    }
});

timeFormatBtn.addEventListener('click', () => {
    currentTime.textContent = changeTimeFormat(currentTime.textContent);
});

tempFormat.addEventListener('click', () => {
    imperial = !imperial;
    currentTemp.textContent = changeTempFormat(celsius);
    feelsTemp.textContent = changeTempFormat(feelsLikeCelsius);
    windSpeed.textContent = changeWindUnit(speedKPH);
    tempFormat.textContent = imperial ? 'Display °C' : 'Display °F';
});

// JSON Online Viewer