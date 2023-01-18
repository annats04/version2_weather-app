function displayTemperature(response) {
  console.log(response.data.wind.speed);
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let feelsLikeElement = document.querySelector("#feelsLike");

  let windElement = document.querySelector("#wind");

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
