import React, { FormEvent, useContext, useState } from "react"
import {AiFillEdit, AiFillDelete, AiTwotoneSave, AiFillSave} from 'react-icons/ai'
import { IDeal } from "../models/DealModel"
import { ModalContext } from "../context/ModalContext"
import { Modal } from "./Modal"
import { ModalForm } from "./ModalForm"
import Dropdown from "./Dropdown"

interface DealProps {
	deal: IDeal,
	onUpdate : (deal : IDeal) => void,
	onDelete : (id : number) => void
}

export const Deal = ( {deal, onUpdate, onDelete} : DealProps) => {
	const {sender, open, close} = useContext(ModalContext)

	return (
		<>
			<div className="flex justify-between items-center bg-violet-500 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
				<p className="font-montserrat max-w-60 overflow-x-auto">{deal.text}</p>
				<div className="flex items-center gap-x-4">
					<sub className="font-montserrat">{deal.date}</sub>
					<AiFillEdit className="text-xl" onClick={() => open(deal)}/>
					<AiFillDelete className="text-xl" onClick={() => onDelete(deal.id)}/>
					< Dropdown/> {/* Very handsome but hmm */}
				</div>
			</div>
			{sender === deal && <Modal title="Update the deal" onClose={() => close()}>
				<ModalForm deal={deal} action={onUpdate} inner={<AiFillSave className="text-xl"/>}/>
			</Modal>}
		</>
	)
}