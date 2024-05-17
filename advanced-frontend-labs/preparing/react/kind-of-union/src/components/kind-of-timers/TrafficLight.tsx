import { useEffect, useRef, useState } from "react";

export const TrafficLight = () => {
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