import React, {Component}  from "react";
import Card from "../Card/Card";
import TopBar from "../Topbar/TopBar";
import "./Movies.css"
class Movies extends Component{
    constructor(props){
        super(props)
        this.state ={
            datos: [],
            datosFiltrados: [],
            textoSearch:""
        }
    }

    componentDidMount(){
        let url= "https://api.themoviedb.org/3/movie/upcoming?api_key=6765b48c8865627bc1d9fc0ac2673df7&language=en-US&page=1"       
         fetch(url)
        .then( response => response.json())
        .then( data =>{
             console.log(data);
              this.setState({
            datos: data.results,
            datosFiltrados : data.results,

        })
        })
        .catch( error => error)

    }

    search(buscado){
       let listaFiltrada= this.state.datos.filter(movies=>movies.title.toUpperCase().includes(buscado.toUpperCase()))
        if (listaFiltrada.length> 0) {
            this.setState({
                datosFiltrados:listaFiltrada,
                textoSearch:""
            })
            
        }else{

            this.setState({
                datosFiltrados:[],
                textoSearch: "No hay resultados para su parametro de busqueda"
            })
           
        }
    }


    render(){
        return(
            <React.Fragment>
            <TopBar search={(buscado)=>this.search(buscado)}/>
         <section className='card-wrapper'>
             {
                 this.state.datos.length === 0 ? 
                 <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>: 
                this.state.datosFiltrados.map((datos, idx) => <Card key={datos.original_title + idx} dataDatos={datos}/>)
             }
             {this.state.textoSearch}
         </section>
            </React.Fragment>
        )
       
    }


}


export default Movies;