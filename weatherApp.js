const apiKey = "5397c9d2ffc1e1c95f80a051dbd9a53d";
//getting the elements

const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

//let apiKey = "9f5b03778e172d6169466614b00b5d11";
let cityName = document.getElementById("locationInput").value;
function fetchWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName},{uk}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      locationElement.innerText = `${data.weather[0].icon}`;
      temperatureElement.innerText = `${data.main.temp}`;
      descriptionElement.innerText = `${data.weather[0].description}`;
    });
}
searchButton.addEventListener("click", fetchWeather);
//const key = "9f5b03778e172d6169466614b00b5d11";
