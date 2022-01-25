import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './component/header';
import Home from './component/home';

import Surclassement from './component/surclassement';
import Test from './component/test';
import Test0 from './component/test/test0';


const App =()=>{
  document.body.style.backgroundColor = "white"
  return (
    <div >
      <Test/>
    </div>
  );
}

export default App;
