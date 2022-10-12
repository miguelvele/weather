require('./index.css');

function fetchWeather() {

}

document.addEventListener('DOMContentLoaded', fetchWeather);

const { Weather } = require('./weather.js');
const { UI } = require('./UI'); 
const { Store } = require('./store');
const store = new Store();  
const { city, countryCode } = store.getLocationData();
const weather = new Weather('city', 'countryCode');
const ui = new UI();

async function fetchWeather() {
    
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);

}

document.addEventListener('DOMContentLoaded', fetchWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('country-code').value;

    weather.changeLocation(city,countryCode);
    store.setlocationData(city, countryCode);
    fetchWeather();

    e.preventDefault();
})