import React from 'react';
 
const WeatherData = props=> {
   
 return(
    <div>
           {props.error &&
        <div className="alert alert-danger">
        <p>{props.error}</p>
        </div>
    }
    {
        props.temperature ?
        <div>
 <div className=" card card-body d-flex align-items-center ">

         <p>
             <b>Location:</b> {props.city}, {props.country}, <img src={props.flag}/>
                 <p>
                   <b>Coord(lon,lat): </b> {props.lon}º, {props.lat}º
                 </p>
         </p>
         <p>
             <b><i>Data of weather: </i></b><img src={props.icon}/>
        </p>
             <p>
                 <b>Description:</b>{props.description} <br/>
                 <b>Temperature:</b> {props.temperature} º<br/>
                 <b>Temperature max:</b>{props.temp_max} º<br/>
                 <b>Temperature min:</b>{props.temp_min} º<br/>
                 <b>Humedity:</b>{props.humidity} %<br/>
                 <b>wind speed:</b>{props.wind_speed} m/s,<b>wind direction:</b>{props.wind_d}º

             </p>

                
     </div>
        </div>
        :
        <div className="card card-body">
         
        </div>
    }
    
    <img src={props.map1}/>
  </div>
   
 )
}

export default WeatherData;