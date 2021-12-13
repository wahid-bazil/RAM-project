import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import SliderIdex from './component/slider/index'
import IndexStepper from './component/stepper/index'
import { setConstantValue } from 'typescript';

import Phase2 from './component/surclassement/pahse_2';
import Phase1 from './component/surclassement/pahse_1';
import Phase3 from './component/surclassement/phase_3';
import Phase4 from './component/surclassement/phase_4';
import Phase5 from './component/surclassement/phase_5';
import surclassement from './component/surclassement';
import Surclassement from './component/surclassement';
import Header from './component/header'


function App() {
  const [activeStep, setactiveStep] = React.useState(0);
  const steps = [
    {
      label: 'step 1',
      description: ''
    },
    {
      label: 'step 2',
      description:
        '',
    },
    {
      label: 'step 3',
      description: ``,
    },
    {
      label: 'step 4',
      description: ``,
    },
    {
      label: 'step 5',
      description: ``,
    },
  ];


  return (
    <div className="App ">
      <div className='mt-2'>
        <Header />
      </div>
      <div className='mt-4'>
        <Surclassement />
      </div>


    </div>
  );
}

export default App;
