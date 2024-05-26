import { IDeal } from "../models/DealModel"

interface DropdownItemProps {
	statusId: number,
	str: string,
	deal: IDeal,
	onUpdate: (deal : IDeal) => void
}

export const DropdownItem = ( {statusId, str, deal, onUpdate } : DropdownItemProps) => {

	const statusHandler = () => {
		deal.statusId = statusId 
		onUpdate(deal)
	}

	return (
		<li>
			<button
				onClick={statusHandler}
				className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
			>
				{str}
			</button>
		</li>
	)
}