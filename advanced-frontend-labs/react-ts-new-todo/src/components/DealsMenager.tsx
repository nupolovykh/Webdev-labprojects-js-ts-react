import React, { FormEvent, useContext, useState } from "react"
import { IDeal } from "../models/DealModel";
import { ModalContext } from "../context/ModalContext";
import { Modal } from "./Modal";
import { ModalFormAdd } from "./ModalFormCreate";

interface DealMenagerProps {
	functions: {
		onCreate : (deal : IDeal) => void,
		onDelete : (deal : IDeal) => void,
		onUpdate : (deal : IDeal) => void,
		onSearch : (str : string) => void
	}
}

enum ButtonVariant {
	search,
	add
}

export const DealsMenager = ( {functions} : DealMenagerProps) => {
	const [value, setValue] = useState('')
	const [state, setState] = useState<ButtonVariant>()
	const {modal, open, close} = useContext(ModalContext)

	const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

		if(state == ButtonVariant.add){
			open()
		}
		else if(state == ButtonVariant.search) {
			functions.onSearch(value)
		}
    };

	const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<>
			<form className="mb-4 font-montserrat w-full" onSubmit={handleSubmit}>
				<input type="text" className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
				placeholder="Input your task here" 
				onChange={changeHandler}/>

				<button className="bg-gray-500 border-none text-white
				p-4 cursor-pointer rounded ml-2"
				onClick={() => setState(ButtonVariant.search)}>Search</button>

				<button className="bg-gray-500 border-none text-white
				p-4 cursor-pointer rounded ml-2"
				onClick={() => setState(ButtonVariant.add)}>+</button>
			</form>

			{modal && <Modal title="Add the deal" onClose={() => close()}>
				<ModalFormAdd onCreate={functions.onCreate}/>
			</Modal>}
		</>
	)
}