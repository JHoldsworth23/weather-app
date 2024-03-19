// get a latitude and longitude of the location
const APIKEY = "b27c46842b98db969dffe3b1226f126f";
let location = "London";

async function getCoordinates() {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${APIKEY}`, {mode: 'cors'});
    const data = await response.json();
    const { lat, lon, state } = data[0];
    console.log(lat, lon, state);
}

getCoordinates()
  .catch((err) => console.error('Error:', err));