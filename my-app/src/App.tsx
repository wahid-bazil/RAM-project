import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './component/header';
import Home from './component/home';

import Surclassement from './component/surclassement';


const App =()=>{
  document.body.style.backgroundColor = "white"
  return (
    <div className="App">
      <Surclassement/>
    </div>
  );
}

export default App;
