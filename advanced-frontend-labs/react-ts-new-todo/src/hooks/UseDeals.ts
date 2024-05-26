import { useEffect, useRef, useState } from "react"
import { IDeal } from "../models/DealModel"
import { AxiosError } from "axios"
import { addDeal, deleteDeal, fetchDeals, updateDeal } from "../services/DealService"

export const useDeals = () => {
	const staticDeals = useRef<IDeal[]>([]);

	const [deals, setDeals] = useState<IDeal[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const onSearch = (str: string) => {
		const search = staticDeals.current.filter(d => d.text.toLowerCase().includes(str.toLowerCase()));
		setDeals(search)
	}

	const onCreate = (deal : IDeal) => {
		setDeals(prev => [...prev, deal])
		queryHandler(async () => await addDeal(deal));
	}

	const onDelete = (id: number) => {
		setDeals(prev => prev.filter(d => d.id !== id))
		queryHandler(async () => await deleteDeal(id))
	}
	
	const onUpdate = (deal: IDeal) => {
		setDeals(prev => prev.map(d => (d.id === deal.id ? deal : d)))
		queryHandler(async () => await updateDeal(deal.id, deal))
	}

	const queryHandler = async (action : Function) => {
		try {
			setError('')
			setLoading(true)
			await action();
			setLoading(false)
		}
		catch(ex : unknown) {
			const error = ex as AxiosError
			setLoading(false)
			setError(error.message)
		}
	}

	const fetchDealsReact = async () => {
		console.log('fetching')
		const data = await fetchDeals();
		setDeals(data);
		staticDeals.current = data;
	}

	useEffect(() => {
		queryHandler(async () => await fetchDealsReact())
	}, [])


	return { staticDeals, deals, error, loading, functions:{onCreate, onDelete, onUpdate, onSearch} }
}