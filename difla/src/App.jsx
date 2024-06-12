// src/App.js
import React from 'react';
import MyComponent from './MyComponent';
import HomeFlashcards from './homeFlashcards'
import Minigames from './minigames';
import ParentComponent from './menuOnTop';
import Menu from './menu';

const App = () => {
  return (
    <div className="App">
    {/* <ParentComponent /> */}
    <Menu />
      <MyComponent />
      <HomeFlashcards />
      <Minigames />


    </div>
  );
};

export default App;
