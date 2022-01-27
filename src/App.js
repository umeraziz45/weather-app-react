import { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayWeatherData from './DisplayWeatherData';
import './App.css';

function App() {

  // condition ? <expression if true> : <expression if false>
  // One state for thew weather api, photo api, and the third for user input
  const [ cityLocation, setCityLocation ] = useState("London");
  const [ weatherInfo, setweatherInfo ] = useState({});
  const [ cityPhoto, setCityPhoto ] = useState([]);

  // OpenWeatherAPI endpoint and key
  const apiKeyWeather = '7bdbfb7799ae2ccaf862515d0e38d2ea';

  const apiUrlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=${apiKeyWeather}&units=metric`

  //UnSPlash API endpoint and key
  const apiKeyPhoto = '5oDAndkGaxLG69pL6nwYgcD6PQ8qbm4iVZz7bxUEKxs';

  const apiUrlPhoto = `https://api.unsplash.com/search/photos?query=${cityLocation}&client_id=${apiKeyPhoto}`

  // Function attached to the input field with the onChange attribute. Sets the search query in state
  const userInput = (event) => {
    setCityLocation(event.target.value)
  }

  // eventHandler atttached to the submit button. Triggers API call with new search query
  const submitCity = (event) => {
    event.preventDefault();
    getData();
  }

  //API call nested in useEffect with empty dependency array
  useEffect( () => {
    getData();
  }, [])
  
  // 2 API calls with error handling conditionals
  function getData() {
    fetch(apiUrlWeather)
    .then( (data) => {
      if (data.status === 200) {
        // console.log(data);
        return data.json();
      } else {
        return alert("There seems to be an error! Please check input!")
      }
    })
    .then( (dataJson) => {
      console.log("DATA JSON", dataJson);
      setweatherInfo(dataJson.main)
      console.log("Weather Info", weatherInfo);
    }).catch( (error) => {
      console.log(error)
    })

    fetch(
      apiUrlPhoto)
    .then( (data) => {
      if (data.status === 200) {
        // console.log(data.json());
        return data.json();
      } else {
        throw new Error('Something went wrong');
      }
    }).then( (dataJson) => {
      console.log("Json Data", dataJson);
      setCityPhoto(dataJson.results);
      console.log("Filtered Data", cityPhoto);
    } )
    .catch( (error) => console.log(error))
  }
   // console.log(apiCall);


  return (
    <div className="App">

      <div className="wrapper">

        <div className="searchBar">

          <form action="">

            <input 
            type="text" 
            onChange={userInput} 
            placeholder='Enter City Name'
            className='locationInput'
            />

            <button className='locationQuery' onClick={submitCity}> Get Weather Data</button>

          </form>

        </div>

        {
          cityPhoto.length > 0 ?
          <DisplayWeatherData
          temp={weatherInfo.temp}
          feelsLike={weatherInfo.feels_like}
          tempMin={weatherInfo.temp_min}
          tempMax={weatherInfo.temp_max}
          humidity={weatherInfo.humidity}
          submitCity={submitCity}
          userInput={userInput}
          imgSrc={cityPhoto[0].urls.raw}
          imgAltText={cityPhoto[0].alt_description}         
          /> :
          null

        }

      </div>

      <footer className='footer'> Made at Juno 2022 </footer>



    </div>
  );
}

export default App;
