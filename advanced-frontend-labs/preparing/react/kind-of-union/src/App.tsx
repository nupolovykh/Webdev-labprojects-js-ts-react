import React, { useState } from 'react';
import { SelectBox } from './components/kind-of-forms/SelectBox';
import { MyForm } from './components/kind-of-forms/MyForm';
import { Square } from './components/kind-of-hello-react/Square';
import { OnlyEven } from './components/kind-of-hello-react/OnlyEven';
import { Temperature } from './components/kind-of-hello-react/TemperatureDisplay';
import { CoolButton } from './components/kind-of-hello-react/TheCoolButton';
import { FirstTimer } from './components/kind-of-timers/FirstTimer';
import { SecondTimer } from './components/kind-of-timers/SecondTimer';
import { PrimeNumbers } from './components/kind-of-timers/PrimeNumbers';
import { Ticker } from './components/kind-of-timers/Ticker';
import { TrafficLight } from './components/kind-of-timers/TrafficLight';
import './styles/app.css';
import './styles/grid.css';


function App() {
  return (
    <div className='grid-container'>

      <div className='grid-item'>
        <Square number={3} />
        <OnlyEven array={[1, 2, 3, 4]} />
        <Temperature degrees={36.6} />
        <CoolButton />
      </div>

      <div className='grid-item'>
        <FirstTimer />
        <SecondTimer />
        <PrimeNumbers />
        <Ticker s="Привет!"/>
        <TrafficLight />
      </div>

      <div className='grid-item'>
        <SelectBox />
        <MyForm />
      </div>

      <div className='grid-item'>
      </div>
      
    </div>
  )
}

export default App;
