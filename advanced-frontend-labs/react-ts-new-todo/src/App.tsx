import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
	<>
		<Navigation/>
		<Routes>
			<Route path='/' element={<MainPage/>} />
		</Routes>
	</>
  );
}

export default App;
