import React from "react";
import ReadableDate from "./ReadableDate";

export default function Weather(props) {
  const emojis = {
    "01d": "☀️",
    "01n": "✨",
    "02d": "🌤",
    "02n": "☁️",
    "03d": "⛅️",
    "03n": "☁️",
    "04d": "☁️",
    "04n": "☁️",
    "09d": "🌧",
    "09n": "🌧",
    "10d": "🌦",
    "10n": "🌧",
    "11d": "🌩",
    "11n": "🌩",
    "13d": "❄️",
    "13n": "❄️",
    "50d": "🌫",
    "50n": "🌫",
  };

  return (
    <div className="Weather">
      <div className="current-city">
        <p>
          Current weather in {props.data.city}
          <br />
          <ReadableDate date={props.data.date} />
        </p>
      </div>
      <div className="row g-3 current-weather">
        <div className="col-5 align-self-center">
          <div className="weather-icon">
            <span role="img" aria-label="weather">
              {emojis[`${props.data.icon}`]}
            </span>
          </div>
        </div>
        <div className="col-3 align-self-center">
          <div className="temp-weather-block">
            <h1 className="h1-temp">{Math.round(props.data.temp)}°C</h1>
            <br />
            <h2 className="h2-weather">{props.data.description}</h2>
          </div>
        </div>
        <div className="col-4 align-self-center">
          <div className="wind-rain-hum-block">
            <p className="wind-rain-hum">
              <span className="small-icon" role="img" aria-label="feels">
                ⭐️
              </span>
              Feels like: {Math.round(props.data.feels)}°C
              <br />
              <span className="small-icon" role="img" aria-label="wind">
                💨
              </span>
              Wind: {props.data.wind} mph <br />
              <span className="small-icon" role="img" aria-label="humidity">
                💦
              </span>
              Humidity: {props.data.humidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
