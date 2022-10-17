import React from "react";
import WeatherCard from "./WeatherCard";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-card">
          <WeatherCard defaultCity="Kyiv" />
        </div>

        <div className="Footer">
          <div className="credits">
            <a
              href="https://github.com/aivirrne/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>{" "}
            by Zina Mishchenko
          </div>
        </div>
      </div>
    </div>
  );
}
