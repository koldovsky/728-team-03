(async function () {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=48870e0bc0c0ddfb0fd1d71033a3ed4d&units=metric';

    let answer = await fetch(url);
    let weather = await answer.json();

    console.log(weather);
    const temp = weather.main.temp;

    const output = document.querySelector('.weather__description');

    const {icon} = weather.weather[0];
    
    output.innerHTML = `<div class="weather-icon"><a href="https://openweathermap.org/city/2643743"><img src="./images/icons/${icon}.png"></a></div><p class="weather">${weather.name} - ${weather.weather[0].main} - ${weather.main.temp}˚</p>`;
})();