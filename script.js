const input = document.querySelector('input');
const search = document.querySelector('button');

const APIKEY = "b27c46842b98db969dffe3b1226f126f";
// Needs to make it env for this API Key

function convertLocalTime(timezone) {
    const date = new Date();
    const hours = '0' + (date.getHours() + timezone / 3600) % 24;
    const minutes = '0' + date.getMinutes();
    return `${hours.slice(-2)}:${minutes.slice(-2)}`;
}

function displayWeatherData(weatherJSON) {
    const currentWeather = document.querySelector('.current-weather');
    currentWeather.textContent = weatherJSON.weather[0].description;
    const currentLocation = document.querySelector('.current-location');
    currentLocation.textContent = input.value;
    const currentTime = document.querySelector('.current-time');
    currentTime.textContent = convertLocalTime(weatherJSON.timezone);
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