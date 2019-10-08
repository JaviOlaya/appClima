import React,{Component} from 'react';
import WeatherData from './components/WeatherData';
import WeatherForm from './components/WeatherForm';
import {WEATHER_KEY} from './keys';
class App extends Component{

    state = {
        temperature:'',
        temp_max:'',
        temp_min:'',
        description:'',
        description:'',
        humidity:'',
        wind_speed:'',
        city:'',
        country:'',
        lon:'',
        lat:'',
        icon:'',
        flag:'',
        error:null
    };

    getWeather= async e =>{
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue  =country.value;

        if(cityValue && countryValue){
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
            const response= await fetch(API_URL); 
            const data = await response.json();
            const flag1 = `https://www.countryflags.io/${data.sys.country}/flat/64.png`;
            console.log(data);

            this.setState({
                temperature:data.main.temp,
                temp_max:data.main.temp_max,
                temp_min:data.main.temp_min,
                description:data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city:data.name,
                country:data.sys.country,
                lon:data.coord.lon,
                lat:data.coord.lat,
                icon:data.weather[0].icon,
                flag:flag1,
                error:null
            });
        }
        else {
            this.setState({
                error:'Please Enter correct values.'
        })
                }
            }

    render()
    {
        return (
          <div className="container p-4">
                 <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WeatherForm getWeather={this.getWeather}/>
                        <WeatherData {...this.state}/>
                    </div>

                 </div>

          </div>
        );
    }
 } 

export default App;