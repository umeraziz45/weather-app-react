
const DisplayWeatherData = (props) => {
  return(

    <div className="app">
      
      <div className="wrapper">

        

        <div className="displayData">

          <p> Current Temperature: {props.temp} </p>
          <p>It feels like {props.feelsLike} outside</p>
          <p>It will hit a high of {props.tempMax} and a low of {props.tempMin}</p>
          <p>Humidity is currently {props.humidity}</p>

        </div>

        <img src={props.imgSrc} alt={props.imgAltText} />

      </div>
      
    </div>
  )
}


export default DisplayWeatherData;