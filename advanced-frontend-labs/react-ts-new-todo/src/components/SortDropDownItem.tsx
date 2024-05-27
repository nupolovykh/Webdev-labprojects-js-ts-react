interface SortDropDownItemProps {
	str: string,
	action: () => void
}

export const SortDropDownItem = ( {str, action } : SortDropDownItemProps) => {

	const statusHandler = () => {
		action()
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