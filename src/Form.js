import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <div className="searchbar">
        <form className="row g-3 align-items-center">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the city name..."
            />
          </div>

          <div className="col-auto">
            <input type="submit" value="Search" className="btn btn-primary" />
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
    </div>
  );
}
