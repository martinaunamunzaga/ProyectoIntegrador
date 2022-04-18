import React, {Component} from "react";
import "./Card.css";

class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            VerMas:'aditional-info',
            button:"Ver Mas",
        }

    }
    viewMore(){
        if(this.state.VerMas ==='aditional-info' ){
            this.setState({
                VerMas:'Mostrar',
                button:' Ver Menos',
            })
        }else {
            this.setState({
                VerMas:'aditional-info',
                button:'Ver Mas',

        })
    }

    }
    render(){
        return(
            <article className="tarjeta">
                <img alt="imagen" src={`https://image.tmdb.org/t/p/w500${this.props.dataDatos.poster_path}`} url="" />
                <h3>{this.props.dataDatos.original_title}</h3>
                <p>Descripción: {this.props.dataDatos.overview}</p>
                <section className={`${this.state.VerMas}`}> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                <button onClick={()=>this.viewMore()} >{this.state.button}</button>
                <button>Eliminar</button>
            </article>
        )
    }

}

export default Card;