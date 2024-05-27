import { useEffect, useRef, useState } from "react"
import { IDeal } from "../models/DealModel"
import { AxiosError } from "axios"
import { addDeal, deleteDeal, fetchDeals, updateDeal } from "../services/DealService"

export const useDeals = () => {
	const staticDeals = useRef<IDeal[]>([]);

	const [fetch, setFetch] = useState(true)
	const [deals, setDeals] = useState<IDeal[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const onSearch = (str: string) => {
		const search = staticDeals.current.filter(d => d.text.toLowerCase().includes(str.toLowerCase()));
		setDeals(search)
	}

	const sortByTextAsc = () => {
		const sortedDeals = [...deals].sort((a, b) => {
			const textA = a.text.toLowerCase();
			const textB = b.text.toLowerCase();
			if (textA < textB) return -1;
			else if (textA > textB) return 1;
			return 0;
		});
		setDeals(sortedDeals);
	}

	const sortByTextDesc = () => {
		const sort = staticDeals.current.sort((a, b) => {
			const textA = a.text.toLowerCase()
			const textB = b.text.toLowerCase()
			if(textA > textB) return -1;
			else if(textA < textB) return 1;
			return 0;
		})
		setDeals(sort)
	}

	const sortByDateAsc = () => {
		const sort = staticDeals.current.sort((a, b) => {
			const dateA = new Date(a.date).getTime()
			const dateB = new Date(b.date).getTime()
			return dateA - dateB
		})
		setDeals(sort)
	}

	const sortByDateDesc = () => {
		const sort = staticDeals.current.sort((a, b) => {
			const dateA = new Date(a.date).getTime()
			const dateB = new Date(b.date).getTime()
			return dateB - dateA
		})
		setDeals(sort)
	}

	const onCreate = (deal : IDeal) => {
		setDeals(prev => [...prev, deal])
		queryHandler(async () => await addDeal(deal));
		setFetch(prev => !prev)
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
		console.log('fetching deals') // doeble useeffect without sense oh yeah
		const data = await fetchDeals();
		setDeals(data);
		staticDeals.current = [...data];
	}

	useEffect(() => {
		queryHandler(async () => await fetchDealsReact())
	}, [fetch])


	return { staticDeals, deals, error, loading, functions:{onCreate, onDelete, onUpdate, onSearch}, sort: {sortByDateAsc, sortByDateDesc, sortByTextAsc, sortByTextDesc} }
}