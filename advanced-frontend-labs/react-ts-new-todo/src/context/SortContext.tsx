import { createContext, useState } from "react";
import { useDeals } from "../hooks/UseDeals";

enum typeOfSort {
	none,
	byTextAsc,
	byTextDesc,
	byDateAsc,
	byDateDesc
}

interface ISortContext {
	type: typeOfSort
	byTextAsc: () => void
	byTextDesc: () => void
	byDateAsc: () => void
	byDateDesc: () => void
}

export const SortContext = createContext<ISortContext>({
	type: typeOfSort.none,
	byTextAsc: () => {},
	byTextDesc: () => {},
	byDateAsc: () => {},
	byDateDesc: () => {}
})

export const SortState = ({ children } : {children: React.ReactNode}) => {
	const [type, setType] = useState<typeOfSort>(typeOfSort.none)
	const { sort } = useDeals()

	const byTextAsc = () => {
		setType(typeOfSort.byTextAsc)
		sort.sortByTextAsc()
	}

	const byTextDesc = () => {
		setType(typeOfSort.byTextDesc)
		sort.sortByTextDesc()
	}

	const byDateAsc = () => {
		setType(typeOfSort.byDateAsc)
		sort.sortByDateAsc()
	}

	const byDateDesc = () => {
		setType(typeOfSort.byDateDesc)
		sort.sortByDateDesc()
	}

	return (
		<SortContext.Provider value={{type, byTextAsc, byTextDesc, byDateAsc, byDateDesc}}>
			{children}
		</SortContext.Provider>
	)
}