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
                        <p> Fecha de publicación: {this.props.dataDatos.release_date}</p>
                        <p> Rating:{this.props.dataDatos.vote_average}</p>
                        <p> Popularidad:{this.props.dataDatos.popularity}</p>
                    </section>
                <button onClick={()=>this.viewMore()} >{this.state.button}</button>
                <button>Eliminar</button>
            </article>
        )
    }

}

export default Card;