import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeatherCard(props) {
  const [city, setCity] = useState(props.defaultCity);

  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5764ce29e95921a10969a7f5a4043872";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Form">
        <div className="card-body">
          <div className="searchbar">
            <form
              className="row g-3 align-items-center"
              onSubmit={handleSubmit}
            >
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the city name..."
                  onChange={handleCityChange}
                />
              </div>

              <div className="col-auto">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>

              <div className="col-auto">
                <input
                  type="button"
                  value="My location"
                  className="btn btn-light"
                />
              </div>
            </form>
          </div>
          <Weather data={weatherData} />
          <Forecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}