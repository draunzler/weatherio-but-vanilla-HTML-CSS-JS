const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const submitButton = document.querySelector('#submit-button');
const weatherDiv = document.querySelector('#weather-inner');
const weatherContainer = document.querySelector('#weather');
form.addEventListener('submit', e => {
  e.preventDefault();
  const city = cityInput.value;
  const apiKey = 'a75eed3712abd05ea47237419c17a123';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      weatherDiv.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>${description}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Feels Like: ${feelsLike}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
      `;
      weatherContainer.classList.add('visible');
      weatherDiv.classList.add('fade-in');
    })
    .catch(error => console.log(error));
});
weatherContainer.addEventListener('click', e => {
  if (e.target === weatherContainer) {
    weatherContainer.classList.remove('visible');
    weatherDiv.classList.remove('fade-in');
  }
});