import { useEffect, useRef, useState } from "react"
import { AxiosError } from "axios"
import { fetchStatuses } from "../services/StatusService"
import { IStatus } from "../models/StatusModel"

export const useStatuses = () => {
	const [statuses, setStatuses] = useState<IStatus[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

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

	const fetchStatusesReact = async () => {
		console.log('fetching statuses') // double useEffect without sense oh yeah => restrict.mode~
		const data = await fetchStatuses();
		setStatuses(data);
	}

	useEffect(() => {
		queryHandler(async () => await fetchStatusesReact())
	}, [])

	return { statuses, error, loading}
}