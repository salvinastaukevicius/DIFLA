
import React from 'react';
import blueBorder from './minigamesBorder.svg';
import minigameCover1 from './minigameCover1.svg'
import minigameCover2 from './minigameCover2.svg'
import minigameCover3 from './minigameCover3.png'
import iceBlock from './ice.png';
import penguinWave from './penguin_wave.png'
import iconSpeaker from './sound.svg'
import './minigames.css'

const Minigames = () => {
  return (
    <div id='minigames'>
    <img id='borderBlue' src={blueBorder} />
    <section id='sectionMinigames'>
        <p id='titleMinigames'>Spelletjes</p>
        <section id='minicardCardSection'>
            <div id='minigameCard'>
                <img id='minigameCover' src={minigameCover1} />
                <p id='textCover'>Letter geluiden</p>
                <button id='buttonCover'>Starten</button>
            </div>
            <div id='minigameCard'>
                <img id='minigameCover' src={minigameCover2} />
                <p id='textCover'>Tik op het geluid</p>
                <button id='buttonCover'>Starten</button>
            </div>
            <div id='minigameCard'>
                <img id='minigameCover' src={minigameCover1} />
                <p id='textCover'>Woorden zoektocht</p>
                <button id='buttonCover'>Starten</button>
            </div>
        </section>
    </section>

    </div>

  );
};

export default Minigames;
