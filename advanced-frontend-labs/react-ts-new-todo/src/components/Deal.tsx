import React, { FormEvent, useContext, useState } from "react"
import {AiFillEdit, AiFillDelete, AiFillSave} from 'react-icons/ai'
import { IDeal } from "../models/DealModel"
import { ModalContext } from "../context/ModalContext"
import { Modal } from "./Modal"
import { ModalForm } from "./ModalForm"
import { IStatus } from "../models/StatusModel"
import { DropDown } from "./Dropdown"

interface DealProps {
	deal: IDeal,
	statuses: IStatus[],
	onUpdateDeal : (deal : IDeal) => void,
	onDelete : (id : number) => void
}

export const Deal = ( {deal, statuses, onUpdateDeal, onDelete} : DealProps) => {
	const {sender, open, close} = useContext(ModalContext)

	return (
		<>
			<div className="flex justify-between items-center bg-violet-500 text-white py-3 px-4 rounded-md mb-1">
				<p className="font-montserrat max-w-60 overflow-x-auto">{deal.text}</p>
				<div className="flex items-center gap-x-4">
					<span className="font-montserrat text-xs align-text-bottom">{deal.date}</span> {/* Very weird logic sub with modal */}
					<AiFillEdit className="text-xl" onClick={() => open(deal)}/>
					<AiFillDelete className="text-xl" onClick={() => onDelete(deal.id)}/>
					< DropDown onUpdate={onUpdateDeal} statuses={statuses} deal={deal} /> {/* Very handsome but hmm */}
				</div>
			</div>
			{sender === deal && <Modal title="Update the deal" onClose={() => close()}>
				<ModalForm deal={deal} action={onUpdateDeal} inner={<AiFillSave className="text-xl"/>} close={close}/>
			</Modal>}
		</>
	)
}