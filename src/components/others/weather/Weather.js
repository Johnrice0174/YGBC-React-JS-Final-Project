import React, { useState } from 'react';
import {Helmet} from 'react-helmet';

const api = {
  key: "c031bbf980e5288f239662524ea5cfd2",
  base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="weather-backg">
      <div className={
        (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16)
        ? 'weather warm' : 'weather')
        : 'weather'}>
        <main>
          <Helmet><title>YGBC- Weather</title></Helmet>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Type a city to get weather..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather-details">
                  {weather.weather[0].main}
                </div>
              </div>
            </div>
          ) : ('')}
        </main>
      </div>
    </div>
  );
}
export default Weather;
