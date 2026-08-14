import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
	<div className="bg-yellow-200">
		<Navigation/>
		<Routes>
			<Route path='/' element={<MainPage/>} />
		</Routes>
	</div>
  );
}

export default App;
