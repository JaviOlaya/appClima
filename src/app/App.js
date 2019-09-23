import React,{Component} from 'react';
import WeatherData from './components/WeatherData';
import WheatherForm from './components/WeatherForm';
class App extends Component{

    render(){
        return (
          <div className="container p-4">
                 <div className="row">
                    <div className="col-md-6 mx-auto">
                        <WheatherForm/>
                        <WeatherData/>
                    </div>

                 </div>

          </div>
        )
    }
}
export default App;