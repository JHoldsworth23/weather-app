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

function changeTimeFormat(timeString) {
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

    const weatherIcon = document.querySelector('.current-weather + img');
    weatherIcon.src = `
        image/weather-png/${dayOrNight(weatherJSON.dt, weatherJSON.sys.sunrise, weatherJSON.sys.sunset)}_${weatherJSON.weather[0].main.toLowerCase()}.png
    `;
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
        const forecastTemp = changeTempFormat(Math.floor(dayForecast.main.temp));
        const forecastTempFeelsLike = changeTempFormat(Math.floor(dayForecast.main.feels_like));

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

function displayHourForecast(hourlyForecastJSON, dayForecastDiv) {
    dayForecastDiv.textContent = '';

    hourlyForecastJSON.forEach((obj) => {
        const hourDiv = document.createElement('div');
        const time = changeTimeFormat(obj.time.split(" ")[1]);
        const weather = obj.condition;
        const forecastTemp = changeTempFormat(Math.floor(obj.temp_c));

        hourDiv.innerHTML = `
            <p class="hour">${time}</p>
            <img src="${weather.icon}" alt="${weather.text}">
            <p class="hour-forecast-temp">${forecastTemp}</p>
        `;
        dayForecastDiv.appendChild(hourDiv);
    });
}

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
    twelveHours = !twelveHours;
    currentTime.textContent = changeTimeFormat(currentTime.textContent);
});

tempFormat.addEventListener('click', () => {
    imperial = !imperial;
    currentTemp.textContent = changeTempFormat(celsius);
    feelsTemp.textContent = changeTempFormat(feelsLikeCelsius);
    windSpeed.textContent = changeWindUnit(speedKPH);
    tempFormat.textContent = imperial ? 'Display °C' : 'Display °F';
});
