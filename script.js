const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather")
const temperature= document.querySelector(".temperature")
const description= document.querySelector(".description")

btn.addEventListener("click",()=>{
    let city = input.value;

    getWeather(city);
})



function getWeather(city) {
    console.log(city);

    fetch(`http://api.weatherapi.com/v1/current.json?key=85cb37acec214464a9e12648240111&q=${city}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const iconCode = data.current.condition.icon;
            icon.innerHTML = `<img src="${iconCode}" alt="Weather Icon"/>`;

            const weatherCity = data.location.name;
            const weatherCountry = data.location.country;
            weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

            const weatherTemp = data.current.temp_c;
            temperature.innerHTML = `${weatherTemp}°C`;

            const weatherDesc = data.current.condition.text;
            description.innerHTML = weatherDesc;
        })
        .catch(err => {
            console.error(err);
            alert('Error fetching weather data');
        });
}
