function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  return `${day} ${hours}: ${minutes}`;
}

function displayTemperature(response) {
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let feelsLikeElement = document.querySelector("#feelsLike");

  let windElement = document.querySelector("#wind");

  let dateElement = document.querySelector("#date");

  dateElement.innerHTML = formatDate(response.data.time * 1000);

  windElement.innerHTML = Math.round(response.data.wind.speed);

  feelsLikeElement.innerHTML = Math.round(response.data.temperature.feels_like);
  humidityElement.innerHTML = response.data.temperature.humidity;
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let apiKey = "a5fa44f8460fdadf371tbdae4e7839fo";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
