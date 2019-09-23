import React,{Component} from 'react';
import WheatherData from './components/WheatherData';
import WheatherForm from './components/WeatherForm';
class App extends Component{

    render(){
        return (
          <div className="container p-4">
                 <div className="row">
                    <div className="col-md-6">
                        <WheatherData/>
                    </div>

                 </div>

          </div>
        )
    }
}
export default App;