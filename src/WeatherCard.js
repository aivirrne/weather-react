import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeatherCard(props) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    search();
  }, []);

  function handleResponse(response) {
    setWeatherData({
      coord: response.data.coord,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
    const query = city !== "" ? city : props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData == null) {
    return "Loading...";
  }

  return (
    <div className="WeatherCard">
      <div className="card-body">
        <div className="searchbar">
          <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
            <div className="col-7">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the city name..."
                value={city}
                onChange={handleCityChange}
              />
            </div>

            <div className="col-auto">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <Weather data={weatherData} />
        <Forecast coordinates={weatherData.coord} />
      </div>
    </div>
  );
}
