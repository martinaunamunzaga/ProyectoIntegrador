import React from "react";
import Movies from "./components/Movies/Movies";
import TopBar from "./components/Topbar/TopBar";
import Footer from "./components/Footer/Footer";

function App() {
  return(
    <React.Fragment>
      <div className="top_bar">
      <TopBar/>
    </div>

    <div className="tira-de-peliculas">
      <Movies/>
    </div>

    <div className="footer">
      <Footer/>
    </div>

    </React.Fragment>
    
  );
        
  
}

export default App;
