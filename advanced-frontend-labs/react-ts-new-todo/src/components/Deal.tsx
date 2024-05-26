import React, { FormEvent, useContext, useState } from "react"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { IDeal } from "../models/DealModel"
import { ModalContext } from "../context/ModalContext"
import { Modal } from "./Modal"
import { ModalForm } from "./ModalForm"

interface DealProps {
	deal: IDeal,
	onUpdate : (deal : IDeal) => void
}

export const Deal = ( {deal, onUpdate} : DealProps) => {
	const {sender, open, close} = useContext(ModalContext)

	return (
		<>
			<div className="flex justify-between items-center bg-violet-500 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
				<p className="font-montserrat">{deal.text}</p>
				<div className="flex items-center gap-x-4">
					<AiFillEdit className="text-xl" onClick={() => open(deal)}/>
					<AiFillDelete className="text-xl"/>
				</div>
			</div>
			{sender === deal && <Modal title="Update the deal" onClose={() => close()}>
				<ModalForm deal={null} action={onUpdate}/>
			</Modal>}
		</>
	)
}