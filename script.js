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

    displayWeatherData(weatherData);
}

function displayWeekForecast(weekForecastJSON, fiveDaysForecast) {
    const interval = 8;
    const weekForecastArr = [];
    for (let i = 7; i < weekForecastJSON.list.length; i=i+interval) {
        weekForecastArr.push(weekForecastJSON.list[i]);
    }

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    weekForecastArr.forEach((dayForecast) => {
        const day = new Date(dayForecast.dt_txt.split(' ')[0]);

        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `
            <p class="day">${dayNames[day.getDay()]}</p>
            <p class="forecast-temp">${Math.floor(dayForecast.main.temp)} °C</p>
            <p>${Math.floor(dayForecast.main.feels_like)} °C</p>
        `;
        fiveDaysForecast.appendChild(dayDiv);
    });
}

function displayHourForecast(hourlyForecastJSON, dayForecastDiv) {
    hourlyForecastJSON.forEach((obj) => {
        const hourDiv = document.createElement('div');
        hourDiv.innerHTML = `
            <p class="hour">${obj.time.split(" ")[1]}</p>
            <p class="hour-forecast-temp">${Math.floor(obj.temp_c)} °C</p>
        `;
        dayForecastDiv.appendChild(hourDiv);
    });
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

    weekForecastBtn.addEventListener('click', () => {
        dayForecastDiv.textContent = '';
        weekForecastDiv.textContent = '';
        displayWeekForecast(weekForecastJSON, weekForecastDiv);
    });

    console.log(dayForecastJSON);

    dayForecastBtn.addEventListener('click', () => {
        dayForecastDiv.textContent = '';
        weekForecastDiv.textContent = '';
        displayHourForecast(dayForecastJSON, dayForecastDiv);
    });
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

getCoordinates('Leeds');

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
