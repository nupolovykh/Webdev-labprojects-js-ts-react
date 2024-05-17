import React, { useState } from 'react';
import './styles/App.css';
import { SelectBox } from './components/kind-of-forms/SelectBox';
import { MyForm } from './components/kind-of-forms/MyForm';


function App() {
  return (
    <div className="App" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SelectBox />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MyForm />
      </div>

      {/* <Revert s="Привет!"/> */}

      {/* <Square number={3} />
			<OnlyEven array={Array(1, 2, 3, 4)} />
			<Temperature degrees={36.6} />
			<CoolButton /> */}

    </div>
  )
}

export default App;
