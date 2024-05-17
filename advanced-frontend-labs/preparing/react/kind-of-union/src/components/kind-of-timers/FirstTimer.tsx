import { useEffect, useState } from "react";

export const FirstTimer = () => {
	const [count, setCount] = useState(10);

	useEffect(() => {
		const timer = setInterval(() => {
			if (count > 0) {
				setCount(count - 1);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [count]);

	return <div>{ count }</div>;
};