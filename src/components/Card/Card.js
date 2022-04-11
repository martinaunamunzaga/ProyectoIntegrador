import React, {Component} from "react";

class Card extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <article>
                <img src={this.props.dataDatos.poster_path}/>
                <h3>{this.props.dataDatos.original_title}</h3>
                <p>Descripción: {this.props.dataDatos.overview}</p>
                <button>Ver más</button>
                <button>Eliminar</button>
            </article>
        )
    }

}

export default Card;