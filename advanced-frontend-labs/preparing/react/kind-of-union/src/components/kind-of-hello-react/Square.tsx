//left it just for example of FC without interface 
export const Square: React.FC<{number: number}> = ({ number }) => {
	return ( <p>The square of {number} is: {number * number}</p> );
};