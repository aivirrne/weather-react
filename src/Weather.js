import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row g-3 current-weather">
        <div className="col-5 align-self-center">
          <div className="weather-icon">
            <span role="img" aria-label="weather">
              ☁️
            </span>
          </div>
        </div>
        <div className="col-3 align-self-center">
          <div className="temp-weather-block">
            <h1 className="h1-temp">
              <span>18</span>°C
            </h1>
            <br />
            <h2 className="h2-weather">broken clouds</h2>
          </div>
        </div>
        <div className="col-4 align-self-center">
          <div className="wind-rain-hum-block">
            <p className="wind-rain-hum">
              <span className="small-icon" role="img" aria-label="feels">
                ⭐️
              </span>
              Feels like: <span>18</span>°C
              <br />
              <span className="small-icon" role="img" aria-label="wind">
                💨
              </span>
              Wind: <span>5</span> mph <br />
              <span className="small-icon" role="img" aria-label="humidity">
                💦
              </span>
              Humidity: <span>73</span>%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
