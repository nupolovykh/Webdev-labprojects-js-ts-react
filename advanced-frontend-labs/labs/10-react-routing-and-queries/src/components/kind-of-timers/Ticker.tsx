import React, { useEffect, useState } from "react";

export const Ticker: React.FC<{ s: string }> = ({ s }) => {
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