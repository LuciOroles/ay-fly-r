import React, { useEffect, useState } from 'react';
import './App.css';

import Checkmark from './Checkmark';
import SubcategoryPicker from './SubcategoryPicker';
import SubcategoryGraph from './SubcateogryGraph';

function App() {
  useEffect(() => {
    document.title = 'Ay-Fly';
  });

  const [flyData, setFlyData] = useState(false);
  const [weatherData, setWeatherData] = useState(false);
  const [graphData, setGraphData] = useState([]) as any[];
  const [subcategory, setSubcategory] = useState('');

  const loadData = (data: any[], subcateg: string) => {
    setSubcategory(subcateg);
    setGraphData(data);
  };
  return (
    <div className="App">
      <div className="loadTrigger">
        <div className="loader">
          <Checkmark label="flights" onChange={setFlyData} />
          {flyData && (
            <SubcategoryPicker
              category="flights"
              subcategories={['cost', 'duration', 'frequency']}
              loadData={loadData}
            />
          )}
        </div>
        <div className="loader">
          <Checkmark label="weather" onChange={setWeatherData} />
          {weatherData && (
            <SubcategoryPicker
              category="weather"
              subcategories={['temp-average', 'humidity', 'sun-hours']}
              loadData={loadData}
            />
          )}
        </div>
      </div>
      <div className="graphWrapper">
        {graphData.length > 0 && (
          <SubcategoryGraph data={graphData} subcategory={subcategory} />
        )}
      </div>
    </div>
  );
}

export default App;
