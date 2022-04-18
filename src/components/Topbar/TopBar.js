import React, { Component } from "react";

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
       <h1 classname="titulo">Nombre de la app</h1>
       <section>
       <i class="fas fa-th"></i>
       <i class="fas fa-align-justify"></i>
       <form action="" onSubmit={ (evento) => this.evitarDefault(evento) }>
                <input type="text" onChange={(evento)=> this.controlarCambios(evento) } value={this.state.valor} placeholder="Buscar Peliculas"/>
                <button type="submit">Buscar</button>
       </form>
       </section>
   </header>

   )
}
   
}

export default TopBar