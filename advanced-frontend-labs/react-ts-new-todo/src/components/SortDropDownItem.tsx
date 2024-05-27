import * as ReactLib from 'react';

interface SortDropDownItemProps {
	label: string
	action: () => void
}

export const SortDropDownItem = ( {label, action } : SortDropDownItemProps) => {
	const handlerStatus = () => {
		action()
	}

	return (
		<li>
			<button onClick={handlerStatus}
				className="block px-4 py-2 hover:bg-gray-100
				 dark:hover:bg-gray-600 dark:hover:text-white"
			> {label} </button>
		</li>
	)
}