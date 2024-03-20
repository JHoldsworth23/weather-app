const input = document.querySelector('input');
const search = document.querySelector('form button');

const APIKEY = "b27c46842b98db969dffe3b1226f126f";
let twelveHours = false;
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

function displayWeatherData(weatherJSON) {
    const currentWeather = document.querySelector('.current-weather');
    currentWeather.textContent = weatherJSON.weather[0].description;

    const currentLocation = document.querySelector('.current-location');
    currentLocation.textContent = `${input.value}, ${weatherJSON.sys.country}`;

    const currentTime = document.querySelector('.current-time');
    currentTime.textContent = convertLocalTime(weatherJSON.timezone);

    const timeFormatBtn = document.querySelector('.time-format');
    timeFormatBtn.style.display = 'block';
    timeFormatBtn.addEventListener('click', () => {
        currentTime.textContent = changeTimeFormat(currentTime.textContent);
    });
}

async function getCurrentWeatherData(lat, lon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`, 
        {mode: 'cors'}
    );
    const weatherData = await response.json();
    console.log(weatherData);
    displayWeatherData(weatherData);
}

async function getCoordinates(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${APIKEY}`, 
        {mode: 'cors'}
    );
    const coordinateData = await response.json();
    const { lat, lon } = coordinateData[0];
    // console.log(`City: ${location} \nLatitude: ${lat} \nLongitude: ${lon} \nCountry: ${country}`);
    getCurrentWeatherData(lat, lon);
}

search.addEventListener('click', () => {
    getCoordinates(input.value)
        .catch((err) => console.error('Error:', err));
});

// JSON Online Viewer