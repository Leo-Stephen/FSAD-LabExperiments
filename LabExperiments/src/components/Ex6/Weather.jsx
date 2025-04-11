import React, { useState } from "react";
import axios from "axios";
import '/src/css/Weather.css';
import Navbar from '../shared/Navbar'
import '../../css/shared/ExperimentLayout.css'

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "a5c4e429b0af2396b46f63da17ecf6af"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      setError(""); // Clear any previous errors
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather();
    }
  };

  return (
    <div className="experiment-layout">
      <Navbar />
      <div className="experiment-content">
        <div className="weather-app">
          <div className="container">
            <h1 className="mb-12">Weather Forecast</h1>
            <form onSubmit={handleSearch} className="mb-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city"
                  value={city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="a1">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            
            </form>

            {error && <div className="alert alert-danger">{error}</div>}

            {weather && (
              <div className="card">
                <div className="card-body">
                  <h3>{weather.name}</h3>
                  <p>
                    <strong>Temperature:</strong> {weather.main.temp}°C
                  </p>
                  <p>
                    <strong>Weather:</strong> {weather.weather[0].description}
                  </p>
                  <p>
                    <strong>Humidity:</strong> {weather.main.humidity}%
                  </p>
                  <p>
                    <strong>Wind Speed:</strong> {weather.wind.speed} m/s
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
