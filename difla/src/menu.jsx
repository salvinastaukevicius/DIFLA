
import React from 'react';
import iconHomeSelected from './assets/images/iconHomeSelected.svg';
import iconStoreUnselected from './assets/images/iconStoreUnselected.svg'
import iconUserUnselected from './assets/images/iconUserUnselected.svg'
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
