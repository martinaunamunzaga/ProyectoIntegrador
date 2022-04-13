import React, {Component}  from "react";
import Card from "../Card/Card";
import "./Movies.css";

class Movies extends Component{
    constructor(props){
        super(props)
        this.state ={
            datos: [1],

        }
    }

    componentDidMount(){
        let url= "https://api.themoviedb.org/3/movie/upcoming?api_key=6765b48c8865627bc1d9fc0ac2673df7&language=en-US&page=1"
        fetch(url)
        .then( response => response.json())
        .then( data => this.setState({
            datos: data.results,
        }))
        .catch( error => error)

    }



    render(){
        return(
         <section className='card-wrapper'>
             {
                 this.state.datos.length === 0 ? 
                 <p>Cargando...</p> : 
                this.state.datos.map((datos, idx) => <Card key={datos.original_title + idx} dataDatos={datos}/>)
             }
         </section>
        )
    }


}


export default Movies;