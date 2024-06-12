// src/App.js
import React, { useEffect } from "react";
import MyComponent from "./MyComponent";
import HomeFlashcards from "./homeFlashcards";
import Minigames from "./minigames";
import Menu from "./menu";
import './app.css'




const App = () => {
  return (
    <div className="App">
      <Menu />
      <MyComponent />
      <HomeFlashcards />
      <Minigames />
      
    </div>
  );
};


export default App;
