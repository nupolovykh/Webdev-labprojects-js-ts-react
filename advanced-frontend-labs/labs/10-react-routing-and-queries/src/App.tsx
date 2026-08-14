import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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
import { QuaryForm } from './components/kind-of-queries/QueryForm';
import './styles/app.css';
import './styles/grid.css';
import LoginForm from './components/kind-of-queries/PzdcLoginForm';
import RegistrationForm from './components/kind-of-queries/PzdcRegisForm';


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
        <Router>
          <nav style={{marginBottom: '20px'}}>
            <span>
              <Link style={{margin: '20px', color: 'blue'}} to="/" className="mr-2 text-white">Quary-Form</Link>

              <Link style={{margin: '20px', color: 'blue'}} to="/registration" className="mr-2 text-white">Registration</Link>
              
              <Link style={{margin: '20px', color: 'blue'}} to="/login" className="mr-2 text-white">Authorization</Link>
            </span>
          </nav>

          <Routes>
            <Route path="/" element={<QuaryForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/registration" element={<RegistrationForm />} />
          </Routes>
        </Router>
      </div>
      
    </div>
  )
}

export default App;
