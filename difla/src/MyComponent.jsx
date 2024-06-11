// src/MyComponent.js
import React from 'react';
import homeBackground from './background.png';
import blueHome from './homeBackground.png'
import iceBlock from './ice.png';
import penguinWave from './penguin_wave.png'
import iconSpeaker from './sound.svg'
import './homeCard.css'

const MyComponent = () => {
  return (
    <div>

    <div id='container'>
    <img id='homeBackground' src={homeBackground}/>

  <img id='blueHomeBackground' src={blueHome}></img>
  <img id='iceBlock' src={iceBlock}/>
  <img id='penguinHome' src={penguinWave}/>
<section id='sectionGreeting'>
<p id='triangle'></p>
  <p id='rectangleGreeting'>Welcom,<br></br> Klaar om te leren?</p>
  
  <img id='speaker' src={iconSpeaker}/>
</section>
    </div>

  <div id='menu'>

  </div>

    </div>

  );
};

export default MyComponent;
