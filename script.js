const input = document.querySelector('input');
const search = document.querySelector('.search');

const openWeatherAPI = 'b27c46842b98db969dffe3b1226f126f';
const weatherAPI = 'dcb884b7c7f4487cbca185100242903'
let twelveHours = false;
let imperial = false;
// Needs to make it env for this API Key

function convertLocalTime(timezone) {
    const date = new Date();
    const hours = '0' + (date.getHours() + timezone / 3600) % 24;
    const minutes = '0' + date.getMinutes();
    return `${hours.slice(-2)}:${minutes.slice(-2)}`;
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
        return `${changeHours}:${minute}`;
    }
}

function changeTempFormat(celsius) {
    return imperial 
      ? Math.floor((celsius * 9/5) + 32) + ' °' 
      : celsius + ' °';
}

function changeWindUnit(speedKPH) {
    return imperial 
      ? Math.round(speedKPH * 6.21371) / 10 + ' mph' 
      : speedKPH + ' kph';
}

function dayOrNight(now, dawn, dusk) {
    const currentDay = document.querySelector('.current-day');
    (now >= dawn && now <= dusk) 
      ? currentDay.innerHTML = '<img src="/image/weather-png/day_clear.png" alt="daytime">' 
      : currentDay.innerHTML = '<img src="/image/weather-png/night_clear.png" alt="nighttime">';
}

function displayWeatherData(weatherJSON) {
    const currentWeather = document.querySelector('.current-weather');
    currentWeather.textContent = weatherJSON.weather[0].description;

    const currentLocation = document.querySelector('.current-location');
    currentLocation.textContent = `${input.value}`;

    const currentTime = document.querySelector('.current-time');
    currentTime.textContent = convertLocalTime(weatherJSON.timezone);

    const timeFormatBtn = document.querySelector('.time-format');
    timeFormatBtn.style.display = 'block';
    timeFormatBtn.addEventListener('click', () => {
        currentTime.textContent = changeTimeFormat(currentTime.textContent);
    });

    const currentTemp = document.querySelector('.current-temp');
    const celsius = Math.floor(weatherJSON.main.temp);
    currentTemp.textContent = celsius + ' °';

    const feelsTemp = document.querySelector('.feels-temp');
    const feelsLikeCelsius = Math.floor(weatherJSON.main.feels_like);
    feelsTemp.textContent = feelsLikeCelsius + ' °';

    const windSpeed = document.querySelector('.wind');
    const speedKPH = Math.round(weatherJSON.wind.speed * 36) / 10;
    windSpeed.textContent = `${speedKPH} kph`;

    const tempFormat = document.querySelector('.temp-format');
    tempFormat.style.display = 'block';
    tempFormat.addEventListener('click', () => {
        imperial = !imperial;
        currentTemp.textContent = changeTempFormat(celsius);
        feelsTemp.textContent = changeTempFormat(feelsLikeCelsius);
        windSpeed.textContent = changeWindUnit(speedKPH);
        tempFormat.textContent = imperial ? 'Display °C' : 'Display °F';
    });

    dayOrNight(weatherJSON.dt, weatherJSON.sys.sunrise, weatherJSON.sys.sunset);

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `${weatherJSON.main.humidity}%`;
}

async function getCurrentWeatherData(lat, lon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherAPI}&units=metric`, 
        {mode: 'cors'}
    );
    const weatherData = await response.json();
    console.log(weatherData);
    displayWeatherData(weatherData);
}

function displayWeekForecast(weekForecastJSON) {
    const weekDiv = document.querySelector('.week-forecast');
    weekDiv.textContent = '';
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    weekForecastJSON.forEach((dayForecast) => {
        const day = new Date(dayForecast.date);
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${dayNames[day.getDay()]}</h2>
            <p>${Math.floor(dayForecast.day.avgtemp_c)}</p>
            <p>${Math.floor(dayForecast.day.mintemp_c)}</p>
            <h3>${dayForecast.day.condition.text}</h3>
        `;
        weekDiv.appendChild(div);
    });
}

function displayWeatherForecast(forecastJSON) {
    const currentDT = Math.floor(Date.now() / 1000);
    const dayForecast = forecastJSON[0].hour
      .concat(forecastJSON[1].hour)
      .filter(obj => {if (currentDT < obj.time_epoch) return obj})
      .slice(0, 24);
       
    console.log('DAY FORECAST:');
    console.log(dayForecast);

    const weekForecastBtn = document.querySelector('.week-forecast-btn');
    weekForecastBtn.addEventListener('click', () => {
        displayWeekForecast(forecastJSON.slice(1, 8));
    });
}

async function getWeatherForecast(lat, lon) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${lat},${lon}&days=8`,
        { mode: 'cors'}
    );
    const weatherForecastData = await response.json();

    displayWeatherForecast(weatherForecastData.forecast.forecastday);
}

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

// JSON Online Viewer