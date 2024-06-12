
import React from 'react';
import iconHomeSelected from './iconHomeSelected.svg';
import iconStoreUnselected from './iconStoreUnselected.svg'
import iconUserUnselected from './iconUserUnselected.svg'
import minigameCover3 from './minigameCover3.png'
import iceBlock from './ice.png';
import penguinWave from './penguin_wave.png'
import iconSpeaker from './sound.svg'
import './menu.css'

const Menu = () => {
  return (
    <div id='alignRight'>
    <section id='menuSection'>
    <img id='menuIcon' src={iconHomeSelected}/>
    <img id='menuIcon' src={iconStoreUnselected}/>
    <img id='menuIcon' src={iconUserUnselected}/>
    </section>
    </div>


  );
};

export default Menu;
