import React from "react";
import Advice from "./Advice";
import Cocktail from "./Cocktail";
import Header from "./Header";
import "./App.css";

const App = () => {

   return (
      <div className="app">
         <Header />
         <Cocktail />
         <Advice />
      </div>
   )
}

export default App;