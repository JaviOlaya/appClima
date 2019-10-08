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
 <div className="card card-body">
         <p>
             <b>Location:</b> {props.city}, {props.country}, <img src={props.flag}/>
                 <p>
                   <b>Coord(lon,lat): </b> {props.lon}º, {props.lat}º
                 </p>
             <br/>

         </p>
         <p>
             <b><i>Data of weather:</i></b><br/>
        </p>
             <p>
                 Description:{props.description} <br/>
                 Temperature:{props.temperature} º<br/>
                 Temperature max:{props.temp_max} º<br/>
                 Temperature min:{props.temp_min} º<br/>
                 Humedity:{props.humidity} %<br/>
                 wind speed:{props.wind_speed} m/s
             </p>

         
     </div>
        </div>
        :
        <div className="card card-body">
           
        </div>
    }
    

  </div>
    
 )
}

export default WeatherData;