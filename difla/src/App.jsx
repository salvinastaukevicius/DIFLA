// src/App.js
import React from 'react';
import MyComponent from './MyComponent';
import HomeFlashcards from './homeFlashcards'
import Minigames from './minigames';

const App = () => {
  return (
    <div className="App">
      <MyComponent />
      <HomeFlashcards />
      <Minigames />

    </div>
  );
};

export default App;
