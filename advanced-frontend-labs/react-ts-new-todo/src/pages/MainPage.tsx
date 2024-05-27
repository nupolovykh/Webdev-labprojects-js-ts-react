import { DealList } from "../components/DealList"
import { ErrorMessage } from "../components/Error"
import { GeniousLoader } from "../components/GeniousLoader"
import { SimpleLoader } from "../components/SimpleLoader"
import { DealsProvider, useDealsContext } from "../context/DealsContext"

export const MainPage = () => {
	return (
		<DealsProvider>
			<div className="container mx-auto max-w-2xl pt-5">
				< MainPageContent />
			</div>
		</DealsProvider>
	)
}
  
const MainPageContent = () => {
	const { loading, error } = useDealsContext();
	return (
		<>
			{error && <ErrorMessage error={error} />}
			{loading && <SimpleLoader />}
			<DealList />
		</>
	);
};