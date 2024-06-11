// src/MyComponent.js
import React from 'react';
import arrowOrangeRight from './arrowOrangeRight.svg';
import blueHome from './homeBackground.png'
import iceBlock from './ice.png';
import penguinWave from './penguin_wave.png'
import iconSpeaker from './sound.svg'
import './homeFlashcards.css'

const HomeFlashcards = () => {
  return (
    <div>
    <p id='titleFlashcards'>Flashcards</p>
    <section id='buttonSeeAll'>
        <p id='buttonSeeAllText'>Bekijk alles</p>
        <img id='arrowOrangeRight' src={arrowOrangeRight} />
    </section>
    <section>

    </section>

    </div>

  );
};

export default HomeFlashcards;
