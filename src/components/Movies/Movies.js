import React, {Component}  from "react";
import Card from "../Card/Card";

class Movies extends Component{
    constructor(props){
        super(props)
        this.state ={
            datos: [],

        }
    }
}

    class Card extends Component{
        constructor(props){
            super(props)
            this.state ={
                VerMas:'info-extra',
                button:"Ver Mas",
            }

        }
        viewMore(){
            if(this.state.VerMas ==='info-extra' ){
                this.setState({
                    VerMas:'Mostrar',
                    button:' Ver Menos',
                })
            }else {
                this.setState({
                    VerMas:'info-extra',
                    button:'Ver Mas',

            })
        }

        }

    }

    componentDidMount();{
        let url= "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
        fetch(url)
        .then( response => response.json())
        .then( data => this.stateState({
            datos: data.results
        }))
        .catch( error => error)

    }


    render();{
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