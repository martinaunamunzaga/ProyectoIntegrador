import React, { Component } from "react";
import "./TopBar.css";

class TopBar extends Component{
  constructor(props){
    super(props)
    this.state ={
        valor:''

    }
}

  evitarDefault(evento){
    evento.preventDefault();
}

controlarCambios(event){
    this.setState({
        valor: event.target.value
    }, () =>this.props.search(this.state.valor));
}

render(){
  return(
    <header className="header">
       <h1 className="titulo">Netclick</h1>
       <section>
       <button onClick={()=>this.props.orientacion()}>Orientacion</button>
       <form action="" onSubmit={ (evento) => this.evitarDefault(evento) }>
                <input type="text" onChange={(evento)=> this.controlarCambios(evento) } value={this.state.valor} placeholder="Buscar Peliculas"/>
                <button type="submit">Buscar</button>
       </form>
       <button onClick={()=>this.props.agregar()}>Agregar Peliculas</button>
       </section>
   </header>

   )
}
   
}

export default TopBar