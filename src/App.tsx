import React, { useEffect, useState } from 'react';
import './App.css';

import Categories from './Categories';

function App() {
  useEffect(() => {
    document.title = 'Ay-Fly';
  });

  const [flyData, setFlyData] = useState(false);
  const [weatherData, setWeatherData] = useState(false);

  return (
    <div className="App">
      <div className="loadTrigger">
        <div className="loader">
          <label htmlFor="flights">
            Flights
            <input
              type="checkbox"
              id="flights"
              onChange={({ target }) => {
                setFlyData(target.checked);
              }}
            ></input>
          </label>
        </div>
        <div className="loader">
          <label htmlFor="weather">
            Weather
            <input
              type="checkbox"
              id="weather"
              onChange={({ target }) => {
                setWeatherData(target.checked);
              }}
            ></input>
          </label>
        </div>
      </div>
      <div className="content">
        {flyData && <Categories category="flights" />}
        {weatherData && <Categories category="weather" />}
      </div>
    </div>
  );
}

export default App;

// <Loading />
