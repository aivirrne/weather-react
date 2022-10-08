import React from "react";
import Form from "./Form";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Content() {
  return (
    <div className="Content">
      <div className="container">
        <div className="page-content">
          <div className="weather-card">
            <div className="card-body">
              <Form />
              <City />
              <Weather />
              <Forecast />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
