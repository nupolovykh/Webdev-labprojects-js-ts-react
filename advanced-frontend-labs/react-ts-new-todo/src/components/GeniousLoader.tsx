import { useEffect, useState } from 'react'
import {AiOutlineLoading, AiOutlineLoading3Quarters} from 'react-icons/ai'

enum Loading {
	none,
	quarter,
	threequarters
}

export const GeniousLoader = () => {
	const [state, setState] = useState<Loading>(Loading.none)
	const [delay, setDelay] = useState(1)

	useEffect(() => {
		const timer = setInterval(() => {
			console.log(delay)
			switch (state) {
				case Loading.none:
					setState(Loading.quarter)
					setDelay(2)
					break;
				case Loading.quarter:
					setState(Loading.threequarters)
					setDelay(1)
					break;
				case Loading.threequarters:
					setState(Loading.none)
					break;
				default:
					break;
			}
		}, 200);

		return () => clearInterval(timer);
	}, [state, delay])

	const divstyles = "text-xl flex items-center justify-center";
	const iconstyles = "h-4 w-4";
	return (
		<div className={divstyles}>
			{state === Loading.none && <div className={iconstyles}/> }
			{state === Loading.quarter && <AiOutlineLoading className={iconstyles}/> }
			{state === Loading.threequarters && <AiOutlineLoading3Quarters className={iconstyles}/> }
			<p className='ml-5'>Loading...</p>
		</div>
	)
}