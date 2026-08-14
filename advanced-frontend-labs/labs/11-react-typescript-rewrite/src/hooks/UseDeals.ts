import { useEffect, useRef, useState } from "react"
import { IDeal } from "../models/DealModel"
import { AxiosError } from "axios"
import { addDeal, deleteDeal, fetchDeals, getNextId, updateDeal } from "../services/DealService"

export const useDeals = () => {
	const [nextId, setNextId] = useState<number | null>(null)

	const [deals, setDeals] = useState<IDeal[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const onSearch = (str: string) => {
		const search = [...deals].filter(d => d.text.toLowerCase().includes(str.toLowerCase()));
		setDeals(search)
	}

	const sortByTextAsc = () => {
		const sorted = [...deals].sort((a, b) => a.text.localeCompare(b.text));
		setDeals(sorted);
	}

	const sortByTextDesc = () => {
		const sorted = [...deals].sort((a, b) => b.text.localeCompare(a.text));
		setDeals(sorted)
	}

	const sortByDateAsc = () => {
		const sorted = [...deals].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
		setDeals(sorted)
	}

	const sortByDateDesc = () => {
		const sorted = [...deals].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		setDeals(sorted)
	}

	const onCreate = (deal : IDeal) => {	//Must remove refetching from the server where possible
		setDeals(prev => [...prev, deal])
		setNextId(deal.id + 1)
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
		}
		catch(ex : unknown) {
			const error = ex as AxiosError
			setError(error.message);
		}
		finally {
			setLoading(false)
		}
	}

	const fetchDealsReact = async () => {
		console.log('fetching deals') // doeble useEffect without sense oh yeah => because restric.mode~
		const data = await fetchDeals();
		setDeals(data);

		if(nextId === null){
			console.log('fetch nextId')
			const id = await getNextId();
      		setNextId(id + 1);
		}
	}

	useEffect(() => {
		queryHandler(async () => await fetchDealsReact())
	}, [nextId])


	return { deals, error, loading, nextId, 
	functions:{onCreate, onDelete, onUpdate, onSearch}, 
	sort: {sortByDateAsc, sortByDateDesc, sortByTextAsc, sortByTextDesc} }
}