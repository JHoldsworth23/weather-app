const input = document.querySelector('input');
const search = document.querySelector('button');

const APIKEY = "b27c46842b98db969dffe3b1226f126f";

async function getCurrentWeatherData(lat, lon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`, 
        {mode: 'cors'}
    );
    const weatherData = await response.json();
    console.log(weatherData);
}

async function getCoordinates(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${APIKEY}`, 
        {mode: 'cors'}
    );
    const coordinateData = await response.json();
    const { lat, lon, country } = coordinateData[0];
    console.log(`City: ${location} \nLatitude: ${lat} \nLongitude: ${lon} \nCountry: ${country}`);
    getCurrentWeatherData(lat, lon);
}

search.addEventListener('click', () => {
    getCoordinates(input.value)
        .catch((err) => console.error('Error:', err));
});