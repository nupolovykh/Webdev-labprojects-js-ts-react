import { DealList } from "../components/DealList"
import { useDeals } from "../hooks/UseDeals"
import { ErrorMessage } from "../components/Error"
import { GeniousLoader } from "../components/GeniousLoader"
import { useStatuses } from "../hooks/UseStatuses"
import { SimpleLoader } from "../components/SimpleLoader"

export const MainPage = () => {
	const {deals, loading, error, functions} = useDeals();
	const { statuses } = useStatuses();

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{error && <ErrorMessage error={error}/>}
			{loading && <SimpleLoader/>}
			<DealList deals={deals} functions={functions} statuses={statuses}/>
		</div>
	)
}