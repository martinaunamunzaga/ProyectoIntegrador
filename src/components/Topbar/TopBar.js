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
                <input type="text" onChange={(event)=> this.controlarCambios(event) } value={this.state.valor} placeholder="Buscar Peliculas"/>
                <button type="submit" value="submit" >Buscar</button>
       </form>
       <button onClick={()=>this.props.agregar()}>Agregar Peliculas</button>
       </section>
   </header>

   )
}
   
}

export default TopBar