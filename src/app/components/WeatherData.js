import React from 'react';
import 
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
             Location:{props.city}, {props.country},<img src="https://www.countryflags.io/$props.country/flat/64.png"/><br/>
    
         </p>
         <p>
             Data of weather:<br/>
        </p>
             <p>
                 Description:{props.description}<br/>
                 Temperature:{props.temperature}<br/>
                 Humedad:{props.humidity} <br/>
                 wind speed:{props.wind_speed} 
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