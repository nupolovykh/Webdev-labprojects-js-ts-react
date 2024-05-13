import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const FirstTimer: React.FC = () => {
	const [count, setCount] = useState(10);

	useEffect(() => {
		const timer = setInterval(() => {
			if (count > 0) {
				setCount(count - 1);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [count]);

	return <div>{count}</div>;
};

const SecondTimer: React.FC = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout>(); // Create a mutable ref for the interval

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 1); // Increment time by 1 second
			}, 1000);
		} else {
			clearInterval(intervalRef.current); // Clear the interval if the timer stops
		}

		return () => clearInterval(intervalRef.current); // Cleanup on component unmount
	}, [isRunning]);

	const handleStartClick = () => {
		setIsRunning(true);
	};

	return (
		<div>
			<div>Time: {time}</div>
			<button onClick={handleStartClick}>▶ Start Timer</button>
		</div>
	);
};

const PrimeNumbers: React.FC = () => {
	const [primes, push] = useState<number[]>([]);

	useEffect(() => {
		const isPrime = (num: number): boolean => {
			for (let i = 2; i <= Math.sqrt(num); i++) {
				if (num % i === 0) {
					return false;
				}
			}
			return num > 1;
		};
		const interval = setInterval(() => {
			let nextPrime = primes.length === 0 ? 2 : primes[primes.length - 1] + 1;
			while (!isPrime(nextPrime)) {
				nextPrime++;
			}
			push([...primes, nextPrime]);
		}, 1000);

		return () => clearInterval(interval);
	}, [primes]);

	return (
		<div>
			{JSON.stringify(primes)}
		</div>
	);
};

const TrafficLight: React.FC = () => {
	const [color, setColor] = useState("red");
	const redToGreenRef = useRef(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setColor((prevColor) => {
				switch (prevColor) {
					case "red":
						return "yellow";
					case "green":
						return "yellow";
					case "yellow":
						const redToGreen = redToGreenRef.current;
						redToGreenRef.current = !redToGreenRef.current;
						return redToGreen ? "green" : "red";
					default:
						return "red";
				}
			});
		}, 1000);
	
		return () => clearInterval(interval);
	}, []);

	const circleStyle = {
		width: '100px',
		height: '100px',
		borderRadius: '50%',
		border: '2px solid black'
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',  justifyContent: 'center' }}>
			<div
			style={{
				...circleStyle,
				backgroundColor: color === 'red' ? 'red' : 'white'
			}}
		></div>
		<div
			style={{
				...circleStyle,
				backgroundColor: color === 'yellow' ? 'yellow' : 'white',
				margin: '10px 0'
			}}
		></div>
		<div
			style={{
				...circleStyle,
				backgroundColor: color === 'green' ? 'green' : 'white'
			}}
		></div>
		</div>
	);
};

const Revert: React.FC<{ s: string }> = ({ s }) => {
	const [revertedString, setRevertedString] = useState(s);

	useEffect(() => {
		const interval = setInterval(() => {
			setRevertedString((prevString: string) => {
				const lastChar = prevString.charAt(prevString.length - 1);
				const newString = lastChar + prevString.substring(0, prevString.length - 1);
				return newString;
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return <div>{revertedString}</div>;
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
			<FirstTimer/>
			<SecondTimer/>
			<PrimeNumbers/>
			<TrafficLight/>
			<Revert s="Привет!"/>
		</div>
	);
}

export default App;
