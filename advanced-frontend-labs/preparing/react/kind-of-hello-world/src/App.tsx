import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//left it just for example of FC without interface 
const Square: React.FC<{number: number}> = ({ number }) => {
	return ( <p>The square of {number} is: {number * number}</p> );
};

interface OnlyEvenProps {
	array : number[]
}

const OnlyEven = ({ array } : OnlyEvenProps) => {
	let newArray = [];
	for (let index = 0; index < array.length; index++) {
		if(array[index] % 2 === 0){
			newArray.push(array[index], ",");
		}
	}
	if (newArray[newArray.length - 1] === ",") newArray.pop();

	return (
	<p>The array of OnlyEven sequence is {newArray}</p>
)};

interface DegreesProps {
	degrees : number
}

const Temperature = ({ degrees } : DegreesProps) => {
	const mycolor = degrees >= 0 ? 'red' : 'blue';
	return (
	<p style={{color: mycolor}}>Today temperature = {degrees} C</p>
)};

const CoolButton = () => {
	const [color, setColor] = useState('green');

	const handleButtonClick = () => {
		const newColor = color === 'green' ? 'red' : 'green';
		setColor(newColor);
	};

	return (
		<button style={{ background: color }} onClick={handleButtonClick}>
			Click me to change my text color
		</button>
	);
};

const Default = () => {
	return (
		<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
	);
};


function App() {
	return (
		<div className="App">
			<Square number={3} />
			<OnlyEven array={Array(1, 2, 3, 4)} />
			<Temperature degrees={36.6} />
			<CoolButton />
		</div>
	);
}

export default App;
