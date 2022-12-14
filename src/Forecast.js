import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    loadForecast();
  }, [props.coordinates]);

  function loadForecast() {
    let apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => setForecast(response.data.daily));
  }

  if (forecast == null) {
    return null;
  }

  return (
    <div className="Forecast">
      <div className="weather-forecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
