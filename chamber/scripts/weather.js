const apiKey = "c2c36977045fecaf1e96ba62ae059284";
const city = "Lagos";
const units = "metric"; // Celsius

async function getWeather() {
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

  try {
    const [currentResp, forecastResp] = await Promise.all([
      fetch(currentUrl),
      fetch(forecastUrl),
    ]);

    if (!currentResp.ok || !forecastResp.ok) {
      throw new Error("Weather API request failed");
    }

    const currentData = await currentResp.json();
    const forecastData = await forecastResp.json();

    displayCurrentWeather(currentData);
    displayForecast(forecastData);
  } catch (error) {
    console.error(error);
    document.getElementById("weather-current").textContent = "Weather data unavailable.";
  }
}

function displayCurrentWeather(data) {
  const container = document.getElementById("weather-current");
  container.innerHTML = `
    <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
    <p><strong>Conditions:</strong> ${data.weather[0].description}</p>
  `;
}

function displayForecast(data) {
  // Forecast API returns data in 3-hour intervals for 5 days.
  // We'll pick approx noon (12:00) forecast for next 3 days.

  const container = document.getElementById("weather-forecast");
  container.innerHTML = "<h4>3-Day Forecast</h4>";

  // Filter noon entries for next 3 days
  const noonForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(1, 4);

  noonForecasts.forEach(day => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString(undefined, { weekday: "long" });
    const temp = Math.round(day.main.temp);
    const desc = day.weather[0].description;
    container.innerHTML += `
      <div class="forecast-day">
        <strong>${dayName}</strong>
        <p>${temp}°C, ${desc}</p>
      </div>
    `;
  });
}

getWeather();


// Mobile nav toggle
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
