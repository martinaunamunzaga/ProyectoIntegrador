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
            textoSearch:"",
            page: 2,
            claseOrientacion: "tarjeta-columna"
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

    eliminar(id) {
        let eliminarTarjetas = [];
          eliminarTarjetas = this.state.datosFiltrados.filter ( eliminarT => eliminarT.id !== id);
    
          this.setState({
            datosFiltrados: eliminarTarjetas,
            datos: eliminarTarjetas
    
      })
    
        }
    
    agregar(){
        let url= "https://api.themoviedb.org/3/movie/upcoming?api_key=6765b48c8865627bc1d9fc0ac2673df7&language=en-US&page=" + this.state.page      
        fetch(url)
       .then( response => response.json())
       .then( data =>{
            console.log(data);
             this.setState({
           datos: this.state.datos.concat(data.results),
           datosFiltrados: this.state.datosFiltrados.concat(data.results),
           page: this.state.page + 1

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

    orientacion(){
        if (this.state.claseOrientacion === "tarjeta-columna") {
            this.setState({
                claseOrientacion: "tarjeta-fila"
            })
            
        }else{
            this.setState({
                claseOrientacion: "tarjeta-columna"
            })
        }
    }




    render(){
        return(
            <React.Fragment>
            <TopBar search={(buscado)=>this.search(buscado)} agregar={() =>this.agregar()} orientacion={()=>this.orientacion()}/>
         <section className='card-wrapper'>
             {
                 this.state.datos.length === 0 ? 
                 <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>: 
                this.state.datosFiltrados.map((datos, idx) => <Card key={datos.original_title + idx} dataDatos={datos} eliminar={(id)=>this.eliminar(id)} claseOrientacion={this.state.claseOrientacion}/>)
             }
             {this.state.textoSearch}
         </section>
            </React.Fragment>
        )
       
    }


}


export default Movies;