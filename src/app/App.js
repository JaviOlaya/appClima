import React,{Component} from 'react';
import WeatherData from './components/WeatherData';
import WeatherForm from './components/WeatherForm';
import {WEATHER_KEY} from './keys';
class App extends Component{

    getWeather= async e =>{
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue  =country.value;
        const API_URL = `api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`;
        const response= await fetch(API_URL); 
        const data = response.json();
        console.log(data);
       e.preventDefault();

    }

    render(){
        return (
          <div className="container p-4">
                 <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherData/>
                    </div>

                 </div>

          </div>
        )
    }
}
export default App;