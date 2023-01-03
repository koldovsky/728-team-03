(async function () {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid=48870e0bc0c0ddfb0fd1d71033a3ed4d&units=metric';

    let answer = await fetch(url);
    let weather = await answer.json();

    console.log(weather);
    const temp = weather.main.temp;

    const output = document.querySelector('.footer__map');
    output.innerHTML = `<iframe
                              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15731424093246463%2C52.782081632850726%2C-0.15441745519638064%2C52.783566038807784&amp;layer=mapnik">
                        </iframe>
                        <p class="weather">${weather.name} - ${weather.weather[0].main} - ${weather.main.temp}˚</p> `;

})();