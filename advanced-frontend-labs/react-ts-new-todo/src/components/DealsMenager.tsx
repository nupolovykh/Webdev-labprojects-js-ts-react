import React, { FormEvent, useContext, useEffect, useRef, useState } from "react"
import { ModalContext } from "../context/ModalContext";
import { Modal } from "./Modal";
import { ModalForm } from "./ModalForm";
import { AiFillFileAdd, AiOutlineFileAdd, AiOutlineSearch } from "react-icons/ai";
import { SortDropDown } from "./SortDropDown";
import { useDealsContext } from "../context/DealsContext";

export enum ButtonVariant {
	searchBtn,
	addBtn,
	dropDown
}

export const DealsMenager = () => {
	const uniqueId = useRef<object>({})
	const [value, setValue] = useState('');
	const [state, setState] = useState<ButtonVariant | null>(null);
	const { sender, open, close } = useContext(ModalContext);
	const { functions } = useDealsContext();

	const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

		if(state == ButtonVariant.addBtn){
			open(uniqueId)
		}
		else if(state == ButtonVariant.searchBtn) {
			functions.onSearch(value)
		}
    };

	const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<>
			<form className="mb-4 font-montserrat w-full flex" onSubmit={handleSubmit}>
				<input type="text" className="outline-none bg-transparent border 
				border-gray-500 p-4 text-white mb-4 rounded placeholder:text-gray-300 w-96"
				placeholder="Input your task here" 
				onChange={changeHandler}/>

				<button className="bg-gray-500 border-none text-white
				p-4 cursor-pointer rounded ml-2 w-auto h-[58px]"
				onClick={() => setState(ButtonVariant.searchBtn)}>
					{<AiOutlineSearch className="cursor-pointer text-xl"/>}
				</button>

				<button className="bg-gray-500 border-none text-white
				p-4 cursor-pointer rounded ml-2 w-auto h-[58px]"
				onClick={() => setState(ButtonVariant.addBtn)}>
					{<AiOutlineFileAdd className="cursor-pointer text-xl"/>}
				</button>

				<SortDropDown state={[state, setState]}/>
			</form>

			{ sender === uniqueId && <Modal title="Add the deal" onClose={() => close()}>
				<ModalForm deal={null} action={functions.onCreate}
				inner={<AiFillFileAdd className="text-xl"/>} close={close}/>
				</Modal>
			}
		</>
	)
}