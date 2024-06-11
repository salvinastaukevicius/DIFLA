// src/MyComponent.js
import React from 'react';
import arrowOrangeRight from './arrowOrangeRight.svg';
import speakerOrange from './orangeSpeaker.svg';
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

    <section id='cardSection'>
    <div id='card'>
    <p id='cardLetter'>a</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <button id='buttonStart'>Starten</button>
    </div>
    <div id='card'>
    <p id='cardLetter'>e</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <button id='buttonStart'>Starten</button>
    </div>
    <div id='card'>
    <p id='cardLetter'>i</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <button id='buttonStart'>Starten</button>
    </div>
    <div id='card'>
    <p id='cardLetter'>aa</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <button id='buttonStart'>Starten</button>
    </div>
    <div id='card'>
    <p id='cardLetter'>ee</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <button id='buttonStart'>Starten</button>
    </div>
    <div id='card'>
    <p id='cardLetter'>uu</p>
    <img id='speakerIcon' src={speakerOrange}/>
    <button id='buttonStart'>Starten</button>
    </div>
    </section>

    </div>

  );
};

export default HomeFlashcards;
