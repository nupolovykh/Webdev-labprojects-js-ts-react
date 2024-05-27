import React, { useState } from "react"
import { DealsMenager } from "./DealsMenager"
import { Deal } from "./Deal";
import { useDealsContext } from "../context/DealsContext";
import { useStatuses } from "../hooks/UseStatuses";

export const DealList = () => {
	const { deals, functions } = useDealsContext();
	const { statuses } = useStatuses();
	return (
		<div className="container bg-gray-700 mt-5 p-8 rounded-md">
			<DealsMenager /> {/*Use the context*/}
			
			{deals.map(d => ( 
				<Deal
					key={d.id - 1}
					deal={d}
					statuses={statuses}
					onUpdateDeal={functions.onUpdate}
					onDelete={functions.onDelete}
				/>
			))} {/*Use the params*/}
		</div>
	)
}