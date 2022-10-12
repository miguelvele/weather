
export class Weather {

    constructor(city, countryCode) 
    {
        this.apikey = 'af96a308201dff0724014e6355bb3338';
        this.city = city;
        this.countryCode = countryCode; 
    }

async getWeather()
{

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;

    const response = await fetch(URL);
    const data = await response.json();
    return data;
}
//cambiar la ciudad
changeLocation(city, countryCode)
{
    this.city = city;
    this.countryCode = countryCode;
}
}