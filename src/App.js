
import React,{ Component } from 'react';
import './App.css';
import { Form } from './Component/Form';
import Weather from './Component/Weather';
 const APIKey = '7a92183306633e4e8b64fd3161a91fb1';
 //api = http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=7a92183306633e4e8b64fd3161a91fb1
 class App extends Component { 
  state = {
    tempreature: '',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getWeather =  async (e) => {
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`);
    const data = await api.json();
    if(city && country){
      this.setState({
        tempreature: data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        tempreature: '',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please Entry City & Country'
      })
    }
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1> Weather APP</h1>
          <Form  getWeather= {this.getWeather}/>
          <Weather
          tempreature= {this.state.tempreature}
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          description= {this.state.description}
          error= {this.state.error}
           />
        </header>
      </div>
    );
  }
}

export default App;
