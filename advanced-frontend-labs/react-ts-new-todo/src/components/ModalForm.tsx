import React, { FormEvent, useState } from "react"
import { IDeal } from "../models/DealModel"
import axios from "axios"

interface ModalFormProps {
	deal: IDeal | null
	action : (deal : IDeal) => void
}

export const ModalForm = ( {deal, action} : ModalFormProps) => {
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
		if(value.trim().length === 0){
			setError("Please input value-title")
			return
		}
		
		let deal : IDeal = {
			date: new Date().toISOString().split('T')[0],
			text: value,
			statusId: 1
		}
		const send = await axios.post("http://localhost:3001/deals", deal)

        action(send.data)
		setValue('')
    };

	const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<form className="font-montserrat w-full" onSubmit={handleSubmit}>
			<input type="text" className="outline-none bg-transparent border
			 border-gray-500 p-4 w-[300px] text-black mb-8 rounded placeholder:text-gray-400"
			placeholder="input your task here" 
			onChange={changeHandler}/>

			<button className="bg-gray-500 border-none text-white
			p-4 cursor-pointer rounded ml-2 w-32">+</button>
		</form>
	)
}