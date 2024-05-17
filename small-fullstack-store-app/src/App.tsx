import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ProductPage } from "./pages/ProductPage"
import { AboutPage } from "./pages/AboutPage"
import { Navigation } from "./components/Navigation"
import RegistrationForm from './gtp-components/RegisComponent';
import LoginForm from './gtp-components/LoginComponent';
import './gtp-styles/Page.css';

function App() {
	return (
		<>
			<Navigation/>
			<Routes>
				<Route path="/" element={ < ProductPage />} />
				<Route path="/about" element={ < AboutPage />} />
				<Route path="/register" element={<RegistrationForm />} />
				<Route path="/login" element={<LoginForm />} />
			</Routes>
		</>
	)
}

export default App;
