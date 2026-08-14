import { useEffect, useRef, useState } from "react";

export const SecondTimer = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(intervalRef.current);
		}

		return () => clearInterval(intervalRef.current);
	}, [isRunning]);

	const handleStartClick = () => {
		setIsRunning((prev) => !prev);
	};

	return (
		<div>
			<div>Time: {time}</div>
			<button onClick={handleStartClick}>▶ Start Timer</button>
		</div>
	);
};