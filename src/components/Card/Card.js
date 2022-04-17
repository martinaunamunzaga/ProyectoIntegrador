import React, {Component} from "react";
import "./";

class Card extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <article className="tarjeta">
                <img alt="imagen" src={this.props.dataDatos.poster_path} url="" />
                <h3>{this.props.dataDatos.original_title}</h3>
                <p>Descripción: {this.props.dataDatos.overview}</p>
                <button>Ver más</button>
                <button>Eliminar</button>
            </article>
        )
    }

}

export default Card;