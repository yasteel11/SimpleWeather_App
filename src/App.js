import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},{ZA}&units=metric&lat=30.5595°&lon=22.9375°&appid=${process.env.REACT_APP_API_KEY}`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Please enter a city'
          type="text" />
      </div>

      <div className="container">
         <div className="top">
          <div className="location">
            <p>{data.name}</p>
            {data.sys ? <p className="bold">{data.sys.country}</p> :null}
          </div>

          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
         </div>

          <div className="bottom">
            <div className="feels"> 
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity:</p>
      
          </div>
          <div className="winds">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed:</p>
           
          </div>
          </div>

      </div>
    </div>
  );
}

export default App;
