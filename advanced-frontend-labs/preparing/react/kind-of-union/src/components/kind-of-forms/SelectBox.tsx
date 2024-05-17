import { useState } from "react";

export const SelectBox = () => {
	const [currentCity, setCurrentCity] = useState<string>("rio")
  
	const cityChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
	  setCurrentCity(e.target.value)
	}
  
	return (
	  <div>
		<select 
		value={currentCity}
		onChange={cityChangeHandler}
		style={{
		  padding: '10px',
		  fontSize: '16px',
		  borderRadius: '5px',
		  border: '1px solid #ccc',
		  marginBottom: '10px'
		}}
		>
		  <option value="rio">Rio de Janeiro</option>
		  <option value="london">London</option>
		  <option value="paris">Paris</option>
		</select>
  
		{currentCity !== 'rio' && 
		<h2 style={{textAlign: 'center', color: 'red'}}>
		  Нет, это не Рио-де-Жанейро!</h2>}
	  </div>
	);
  }