import React, {Component} from 'react';
import axios from 'axios';


class City extends Component{
    constructor(props){
        super(props);
        
        this.variables={
            lang:this.props.lang,
            unit:this.props.unit
        }
        this.state={
            cities:[],
            unit:"hoola"
        }


      this.requestCityInfo = this.requestCityInfo.bind(this);//Permite la realizar el llamado a los state desde la misma clase
	
    }

    requestCityInfo=(valueObject)=>{

        let valor=valueObject.target.value;
        console.log(valor.charAt(0).toUpperCase()+valor.slice(1));
        
        
        axios({
            method:'get',
            url:'https://api.openweathermap.org/data/2.5/weather?',
            responseType:'json',
            params:{
                q:valor.charAt(0).toUpperCase()+valor.slice(1),
                lang:"es",
                units: "metric",
                appid:process.env.REACT_APP_API_KEY_OPENWEATHER
            }
        }).then(function(response){
            console.log(response.data);
        })
        
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.requestCityInfo} placeholder="Ingresa tu ciudad"/>
            </div>
        )
    }

}

export default City;