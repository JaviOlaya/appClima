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
             Location:{props.city}, {props.country}<br/>
    
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
            <p>No Request Yet</p>
        </div>
    }
    

  </div>
    
 )
}

export default WeatherData;