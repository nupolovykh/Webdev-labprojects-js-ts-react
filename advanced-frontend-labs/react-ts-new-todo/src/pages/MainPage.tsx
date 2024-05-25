import { DealList } from "../components/DealList"
import { useDeals } from "../hooks/UseDeals"
import { ErrorMessage } from "../components/Error"
import { Loader } from "../components/Loader"

export const MainPage = () => {
	const {deals, loading, error, onCreate, onDelete, onUpdate, onSearch} = useDeals();

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{error && <ErrorMessage error={error}/>}
			{loading && <Loader/>}
			<DealList deals={deals} functions={{
				onCreate: onCreate,
				onDelete: onDelete,
				onUpdate: onUpdate,
				onSearch: onSearch
			}}/>
		</div>
	)
}