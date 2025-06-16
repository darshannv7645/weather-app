const key = "cfc36a02b41883999eff7d3f1729d96f";
const search = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const icon=document.querySelector('.icon')

async function weather(city) {
    // Build the correct API URL with city and key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp.toFixed(1) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/hr";



let condition= data.weather[0].main.toLowerCase();
switch(condition){
    case 'clouds':
        icon.src='clouds.png';
        break;
    case 'clear':
        icon.src='clear.png';
        break;
    case 'rain':
        icon.src='heavy-rain.png';
        break;
    case 'smoke':
        icon.src='fog.png';
        break;
    case 'drizzle':
        icon.src='drizzle.png';
        break;
    case 'mist':
        icon.src='mist.png';
        break;
    default :
    icon.src='thermometer.png';
}

document.querySelector('.weather').style.display="block"

}

btn.addEventListener('click', () => {
    const city = search.value.trim();
    if (city) {
        weather(city);
    }
});
