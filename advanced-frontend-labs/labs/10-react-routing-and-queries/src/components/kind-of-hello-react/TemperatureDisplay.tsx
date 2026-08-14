interface DegreesProps {
	degrees : number
}

export const Temperature = ({ degrees } : DegreesProps) => {
	const mycolor = degrees >= 0 ? 'red' : 'blue';
	return (
	<p style={{color: mycolor}}>Today temperature = {degrees} C</p>
)};