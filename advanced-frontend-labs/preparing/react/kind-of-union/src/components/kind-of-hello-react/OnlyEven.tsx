interface OnlyEvenProps {
	array : number[]
}

export const OnlyEven = ({ array } : OnlyEvenProps) => {
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