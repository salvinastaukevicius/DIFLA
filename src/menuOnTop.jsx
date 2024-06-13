// ParentComponent.js
import React from 'react';
import MyComponent from './MyComponent';
import Menu from './menu';
import './menuOnTop.css';

const ParentComponent = () => {
  return (
    <div id="container">
      <MyComponent />
      <Menu />
    </div>
  );
};

export default ParentComponent;
