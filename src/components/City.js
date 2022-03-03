
import React, {Component} from 'react';
import axios from 'axios';


class City extends Component{
    constructor(props){
        super(props);
    
        this.state={
            city:'Ciudad',
            units:this.props.units,
            lang:this.props.lang,
            weather:'Clouds',
            temperature:'Temperatura',
            description:'',
            icon:'02d'
        }

      this.requestCityInfo = this.requestCityInfo.bind(this);
     
    }


    
    setCity (valueObject) {
        this.setState({[valueObject.target.name]: valueObject.target.value});
        //console.log(this.state.city);
    }


    requestCityInfo=()=>{

        let valor=(this.state.city.charAt(0).toUpperCase())+(this.state.city.slice(1));
        //console.log(" ",this.state.city);
        var self = this;
        axios({
            method:'get',
            url:'https://api.openweathermap.org/data/2.5/weather?',
            responseType:'json',
            params:{
                q:valor,
                lang:this.state.lang,
                units: this.state.units,
                appid:process.env.REACT_APP_API_KEY_OPENWEATHER
            }
        }).then(function(response){
            console.log(response.data);
            //let temperatura=response.data.main.temp..replace(/\n|\r/g, "");
            let description=response.data.weather[0].description.charAt(0).toUpperCase()+response.data.weather[0].description.slice(1);
            self.setState({
                weather: response.data.weather[0].main,
                icon: response.data.weather[0].icon,
                temperature:(response.data.main.temp+"°c"),
                description:description
            });
        })
    
    }

    render(){
        return(
    

            <div class="nes-container with-title is-centered cuadroInicial">
                <p class="title">Consulta Meteorologica</p>

                <div className="cuadroConsulta">
                    
                    <input type="text" id="inline_field" name="city" className="nes-input inputCity" onChange={(e)=>this.setCity(e)} placeholder="Ciudad"/>

                    {/*<input className="inputCity" type="text" onChange={(e)=>this.setCity(e)} name="city" placeholder="Ciudad"/> */} 
                    <button type="button" className="nes-btn is-success query" onClick={this.requestCityInfo}>Consultar</button>
                </div> 
                <div className="cuadroContenido">
                    <p className="title comuna">{this.state.city}</p>
                    <img className="weatherImage" src={"http://openweathermap.org/img/wn/"+this.state.icon+"@4x.png"}/>
                    <p className="title comuna">{this.state.description}</p>
                    <a className="nes-btn temperature">{this.state.temperature}</a>
                </div>  
                
            
            </div>
   
        )
    }

}

export default City;