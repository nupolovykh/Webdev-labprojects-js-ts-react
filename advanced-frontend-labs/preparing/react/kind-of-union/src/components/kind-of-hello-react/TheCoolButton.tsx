import { useState } from "react";

export const CoolButton = () => {
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