var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temperature = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "0bcce8c4726ae566823d3db84174c42f";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apik}`)
        .then(res => res.json())
        .then(data => {
            var nameval = data.name;
            var description = data.weather[0].description;
            var temperature = data.main.temp;
            var windspeed = data.wind.speed;

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>`;
            description.innerHTML = `Sky Conditions: <span>${description}</span>`;
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name.'));
});
