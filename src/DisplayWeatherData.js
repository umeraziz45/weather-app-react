
const DisplayWeatherData = (props) => {
  return(

    <>
      
        <div className="displayData">

          <p className="temp"> Current Temperature: {props.temp} </p>
          <p className="temp">Feels like {props.feelsLike} outside</p>
          <p className="temp">It will hit a high of {props.tempMax} and a low of {props.tempMin}</p>
          <p className="temp">Humidity is currently at {props.humidity}</p>

        </div>

        <img className="cityImage" src={props.imgSrc} alt={props.imgAltText} />
            
    </>
  )
}


export default DisplayWeatherData;