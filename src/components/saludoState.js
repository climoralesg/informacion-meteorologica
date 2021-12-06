import { render } from "@testing-library/react";
import React, { Component } from "react";

class SaludoState extends Component{
    constructor(props){
        super(props);
        this.state={
            nombre:this.props.nombre,
            contador:this.props.contador
        }
    
        //this.handleClick=this.handleClick.bind(this);
        
    }
    sumarContador=()=>{
        this.setState({
            contador:this.state.contador+1
        })
    }

    render(){
        return(
            <div>
                <p>Hola {this.state.nombre}! Contador: {this.state.contador} </p>

                <button onClick={this.sumarContador}> Agregar al contador</button>
        
            </div>
        )
    }

}
export default SaludoState;