import React, { FormEvent, useState } from "react"
import { IDeal } from "../models/DealModel"
import { useDeals } from "../hooks/UseDeals"

interface ModalFormProps {
	deal: IDeal | null
	action : (deal : IDeal) => void
	inner : JSX.Element
	close : () => void
}

export const ModalForm = ( {deal, action, inner, close} : ModalFormProps) => {
	const [value, setValue] = useState('')
	const { staticDeals } = useDeals();

	const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
		if(deal === null){
			console.log(staticDeals.current[staticDeals.current.length - 1]?.id! + 1)
			let deal : IDeal = {
				id: staticDeals.current[staticDeals.current.length - 1]?.id! + 1,
				date: new Date().toISOString().split('T')[0],
				text: value,
				statusId: 1
			}
			action(deal)
		}
		else {
			deal.text = value
			action(deal)
		}
		setValue('')
		close()
    }

	const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

	return (
		<form className="font-montserrat w-full" onSubmit={handleSubmit}>
			<input type="text" className="outline-none bg-gray-200 border
			 border-gray-500 p-4 w-96 text-black mb-8 rounded placeholder:text-gray-400" 
			placeholder="input your task here" 
			onChange={changeHandler}/>

			<button className="bg-gray-500 border-none text-white
			p-4 cursor-pointer rounded ml-2 w-16 pb-6">
				{inner}
			</button>
		</form>
	)
}