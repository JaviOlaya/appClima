import React from 'react';
const WeatherForm = props=>{

    return(
         <div className="card card-body" class="p-2 mb-2 bg-light text-dark">
             <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Your city Name" 
                    className="form-control" autoFocus/>
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Your Country" 
                    className="form-control" autofocus/>
                </div>
                <div className="d-flex justify-content-center ">
                <button className="btn btn-success btn-lg">
                    <b>Get Weather</b>
                </button>
                <button className="btn btn-danger btn-lg" disabled>
                <a href="."> <b class="text-white">reset</b></a>
                </button>
                </div>
                
             </form>
           
         </div>
    )

};

export default WeatherForm;