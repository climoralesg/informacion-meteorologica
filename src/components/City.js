
import React, {Component} from 'react';
import axios from 'axios';


class City extends Component{
    constructor(props){
        super(props);
    
        this.state={
            city:'Ciudad',
            units:this.props.units,
            lang:this.props.lang,
            weather:'',
            temperature:'Temperatura',
            description:'',
            icon:'',
            cityQuery:'',
        }

      this.requestCityInfo = this.requestCityInfo.bind(this);
     
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            var self=this;
            axios({
                method:'get',
                url:'https://api.openweathermap.org/data/2.5/weather?',
                responseType:'json',
                params:{
                    lat:latitude,
                    lon:longitude,
                    lang:this.state.lang,
                    units: this.state.units,
                    appid:process.env.REACT_APP_API_KEY_OPENWEATHER
                }
            }).then(function(response){
                let description=response.data.weather[0].description.charAt(0).toUpperCase()+response.data.weather[0].description.slice(1);

                self.setState({
                    city:response.data.name,
                    weather: response.data.weather[0].main,
                    icon: response.data.weather[0].icon,
                    temperature:(response.data.main.temp+"°c"),
                    description:description
                });
            });

        });
    
    }
    
    setCity (valueObject){
        if ( !/\d/.test(valueObject.target.value.trim())) {
            this.setState({cityQuery: valueObject.target.value});
        }else{
            this.setState({[valueObject.target.name]: "No puedes ingresar numeros"});
        }
    }


    requestCityInfo=()=>{

        let valor=(this.state.cityQuery.charAt(0).toUpperCase())+(this.state.cityQuery.slice(1));
        var self = this;
        if(this.state.cityQuery===''){
            self.setState({
                city:'Ingrese una ciudad',
                weather: '-',
                icon: '',
                temperature:'-',
                description:'-'
            });
        }else{
            axios({
                method:'get',
                defaultValue: "false",
                url:'https://api.openweathermap.org/data/2.5/weather?',
                responseType:'json',
                params:{
                    q:valor,
                    lang:this.state.lang,
                    units: this.state.units,
                    appid:process.env.REACT_APP_API_KEY_OPENWEATHER
                }
            }).then(function(response){
                let description=response.data.weather[0].description.charAt(0).toUpperCase()+response.data.weather[0].description.slice(1);
                self.setState({
                    weather: response.data.weather[0].main,
                    icon: response.data.weather[0].icon,
                    temperature:(response.data.main.temp+"°c"),
                    description:description
                });
            }).catch((error)=>{
                if(error.response.data.cod==="404"){
                    self.setState({
                        city:'Ciudad no encontrada',
                        weather: '-',
                        icon: '',
                        temperature:'-',
                        description:'-'
                    });
                }
            })
        }
   
    
    }

    render(){

        let image;
        if(this.state.icon!==''){
            image=<img className="weatherImage" src={"http://openweathermap.org/img/wn/"+this.state.icon+"@4x.png"}/>
        }

        return(
    
            <div className="nes-container with-title is-centered cuadroInicial">
                <p className="title">Consulta Meteorologica</p>

                <div className="cuadroConsulta">
                    
                    <input type="text" id="inline_field" name="city" className="nes-input inputCity" onChange={(e)=>this.setCity(e)} placeholder="Ciudad"/>

                    {/*<input className="inputCity" type="text" onChange={(e)=>this.setCity(e)} name="city" placeholder="Ciudad"/> */} 
                    <button type="button" className="nes-btn is-success query" onClick={this.requestCityInfo}>Consultar</button>
                </div> 

                <div className="cuadroContenido">
                    <p className="title comuna">{this.state.city}</p>
                    {image}
                    <p className="title comuna">{this.state.description}</p>
                    <a className="nes-btn temperature">{this.state.temperature}</a>
                </div>  
                
            
            </div>
   
        )
    }

}

export default City;