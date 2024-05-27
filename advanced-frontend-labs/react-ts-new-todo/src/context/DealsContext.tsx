import { createContext, useContext, useState } from "react";
import { useDeals } from "../hooks/UseDeals";
import { IDeal } from "../models/DealModel";

interface IDealsContextProps {
	deals: IDeal[]
	loading: boolean
	nextId: number | null
	error: string
	functions: {
		onCreate: (deal: IDeal) => void
		onDelete: (id: number) => void
		onUpdate: (deal: IDeal) => void
		onSearch: (str: string) => void
	};
	sort: {
		sortByTextAsc: () => void
		sortByTextDesc: () => void
		sortByDateAsc: () => void
		sortByDateDesc: () => void
	};
}

const DealsContext = createContext<IDealsContextProps | undefined>(undefined);

export const DealsProvider = ({ children }: { children: React.ReactNode }) => {
	const dealsData = useDeals();
	return <DealsContext.Provider value={dealsData}>
		{children}
	</DealsContext.Provider>;
};

export const useDealsContext = () => {
	const context = useContext(DealsContext);
	if (context === undefined) {
		throw new Error('useDealsContext must be used within a DealsProvider');
	}
	return context;
};