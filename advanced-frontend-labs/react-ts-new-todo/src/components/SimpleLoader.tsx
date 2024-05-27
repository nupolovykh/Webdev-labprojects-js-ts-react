import gif from '../assets/loading.gif'

export const SimpleLoader = () => {
	const divstyles = "text-xl flex items-center justify-center";
	const iconstyles = "h-4 w-4";
	return (
		<div className={divstyles}>
			<img src={gif} className={iconstyles}/>
			<p className='ml-5 font-montserrat font-normal'>Loading...</p>
		</div>
	)
}