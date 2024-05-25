
interface ErrorMessageProps {
	error: string
}

export const ErrorMessage = ( {error} : ErrorMessageProps) => {
	return (
		<p className="text-center text-2xl font-bold text-red-400">{error}</p>
	)
}