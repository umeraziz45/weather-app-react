import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [ apiCall, setApiCall ] = useState({});

  const apiKey = '7bdbfb7799ae2ccaf862515d0e38d2ea';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect( () => {
    axios({
      url: apiUrl,
      method: 'GET',
      dataResponse: 'json',
      params: {
        q: 'London',
        appid: apiKey,
      }
    }).then( (json) => json.data)
      .then( (jsonData) => console.log(jsonData))
      .catch( (error) => console.log(error))
  })


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
