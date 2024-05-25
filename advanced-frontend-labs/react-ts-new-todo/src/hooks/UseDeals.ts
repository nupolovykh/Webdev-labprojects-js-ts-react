import { useEffect, useState } from "react"
import { IDeal } from "../models/DealModel"
import axios, { AxiosError } from "axios"

export const useDeals = () => {
	const [deals, setDeals] = useState<IDeal[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const onSearch = (str: string) => {
		setDeals(prev => prev.filter(d => d.description.toLowerCase().includes(str.toLowerCase())));
	}

	const onCreate = (deal : IDeal) => {
		setDeals(prev => [...prev, deal])
	}

	const onDelete = (deal: IDeal) => {
		setDeals(prev => prev.filter(d => d.id !== deal.id));
	}
	
	const onUpdate = (deal: IDeal) => {
		setDeals(prev => prev.map(d => (d.id === deal.id ? deal : d)));
	}

	const fetchDeals = async () => {
		try {
			setError('')
			setLoading(true)

			const response = await axios.get<IDeal[]>('http://localhost:3001/deals')

			setDeals(response.data);
			setLoading(false)
		}
		catch(ex : unknown) {
			const error = ex as AxiosError
			setLoading(false)
			setError(error.message)
		}
	}

	useEffect(() => {
		fetchDeals()
	}, [])


	return {deals, error, loading, onCreate, onDelete, onUpdate, onSearch}
}