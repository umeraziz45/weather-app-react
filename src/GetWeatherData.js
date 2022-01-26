import { useEffect, useState } from "react";
import axios from "axios";

const GetWeatherData = (props) => {

  useEffect( () => {
    axios({
      url: props.apiUrl,
      method: 'GET',
      dataResponse: 'json',
      params: {
        q: 'London',
        appid: props.apiKey,
      }
    }).then( (json) => json.data)
      .then( (jsonData) => {
        // console.log(jsonData)
        props.setApiCall(jsonData.main)
      })
      .catch( (error) => console.log(error))
  }, [])
}

export default GetWeatherData;