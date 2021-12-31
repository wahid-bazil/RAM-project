import React from 'react';

import './App.css';

import Surclassement from './component/surclassement';
import Header from './component/header'
import { useSelector } from "react-redux";
import { selectUi } from "./store/ui-slice";
import Home from './component/home';

function App() {


  return (
    <div className="App bg-white">
      <Home/>
    </div>
  );
}

export default App;
