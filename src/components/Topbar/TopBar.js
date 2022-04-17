import React from "react";

function TopBar(){
    return(
     <header className="header">
        <h1 classname="titulo">Nombre de la app</h1>
        <section>
        <i class="fas fa-th"></i>
        <i class="fas fa-align-justify"></i>
        <form>
          <input type="text" name="search" id="" placeholder="Search"></input>
          <button type="submit"><i class="fas fa-search"></i></button>
        </form>
        
        </section>
    </header>


    )
}

export default TopBar