
import React, {Component} from 'react';
import axios from 'axios';


class City extends Component{
    constructor(props){
        super(props);
    
        this.state={
            city:'',
            units:this.props.units,
            lang:this.props.lang,
            weather:'',
            temperature:''
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
            //this.state.weather=response.data.weather[0].main; //modificacion de dato state para imagen
            console.log(response.data.weather[0].main);
        })
    
    }

    render(){
        return(
            <div>
                <div className="cuadroConsulta">
                    
                    <input type="text" onChange={(e)=>this.setCity(e)} name="city" placeholder="Ingresa tu ciudad"/>  
                    <button type="button" className="nes-btn is-primary" onClick={this.requestCityInfo}>Consulta</button>
                </div> 
                <div className="cuadroContenido">
                    <img className="weatherImage" src={"./icons/"+this.state.weather+".png"}/>
                </div>  
            
            </div>
            
        )
    }

}

export default City;