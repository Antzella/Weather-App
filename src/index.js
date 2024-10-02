let now = new Date();
let currentDate = document.querySelector("#current-day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
currentDate.innerHTML = `${day} ${hour}:${minutes}, moderate rain </br>
Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;

let apiKey = "c2956837ba5cd37d3f08f4dft6ba2b6o";

function captureUserInput(event) {
  event.preventDefault();
  let userInputCity = document.querySelector(".search-input");
  let h1 = document.querySelector("#current-city");
  h1.innerHTML = userInputCity.value;

  fetchWeather(userInputCity.value);
}

function fetchWeather(cityName) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  let cityWeather = Math.round(response.data.temperature.current);
  let temperature = document.querySelector("#current-temperature");
  temperature.innerHTML = cityWeather;
}

let userInput = document.querySelector("#search-form");
userInput.addEventListener("submit", captureUserInput);
userInput.addEventListener("submit", displayWeather);
