import React, { FormEvent, useContext, useRef, useState } from "react"
import { IDeal } from "../models/DealModel";
import { ModalContext } from "../context/ModalContext";
import { Modal } from "./Modal";
import { ModalForm } from "./ModalForm";
import { AiFillFileAdd, AiOutlineFileAdd, AiOutlineSearch } from "react-icons/ai";
import { SortState } from "../context/SortContext";
import { SortDropDown } from "./SortDropDown";

interface DealMenagerProps {
	functions: {
		onCreate : (deal : IDeal) => void,
		onSearch : (str : string) => void
	}
}

enum ButtonVariant {
	search,
	add
}

export const DealsMenager = ( {functions} : DealMenagerProps) => {
	const identity = useRef<object>(Object())
	const [value, setValue] = useState('')
	const [state, setState] = useState<ButtonVariant>()
	const {sender, open, close} = useContext(ModalContext)

	const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

		if(state === ButtonVariant.add){
			open(identity)
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
				<input type="text" className="outline-none bg-transparent border border-gray-500 p-4 text-white mb-4 rounded placeholder:text-gray-300 w-96"
				placeholder="Input your task here" 
				onChange={changeHandler}/>

				<button className="bg-gray-500 border-none text-white
				p-4 cursor-pointer rounded ml-2 w-auto pb-6"
				onClick={() => setState(ButtonVariant.search)}>{<AiOutlineSearch className="text-xl"/>}</button>

				<button className="bg-gray-500 border-none text-white
				p-4 cursor-pointer rounded ml-2 w-auto pb-6"
				onClick={() => setState(ButtonVariant.add)}>{<AiOutlineFileAdd className="text-xl"/>}</button>
			</form>

			<SortState>
				<SortDropDown />
			</SortState>

			{ sender === identity && <Modal title="Add the deal" onClose={() => close()}>
				<ModalForm deal={null} action={functions.onCreate} inner={<AiFillFileAdd className="text-xl"/>} close={close}/>
			</Modal>}
		</>
	)
}