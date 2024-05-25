import React, { FormEvent, useContext, useState } from "react"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { IDeal } from "../models/DealModel"
import { ModalContext } from "../context/ModalContext"
import { Modal } from "./Modal"
import { ModalFormUpdate } from "./ModalFormUpdate"

interface DealProps {
	deal: IDeal,
	onUpdate : (deal : IDeal) => void
}

export const Deal = ( {deal, onUpdate} : DealProps) => {
	const {modal, open, close} = useContext(ModalContext)

	return (
		<>
			<div className="flex justify-between items-center bg-violet-500 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
			<p className="font-montserrat">{deal.description}</p>
			<div className="flex items-center gap-x-4">
				<AiFillEdit className="text-xl" onClick={() => open()}/>
				<AiFillDelete className="text-xl"/>
			</div>
		</div>
			{modal && <Modal title="Update the deal" onClose={() => close()}>
				<ModalFormUpdate onUpdate={() => onUpdate}/>
			</Modal>}
		</>
	)
}