import React, { useState } from "react"
import { DealsMenager } from "./DealsMenager"
import { Deal } from "./Deal";
import { IDeal } from "../models/DealModel";
import { IStatus } from "../models/StatusModel";

interface DealListProps {
	deals : IDeal[],
	statuses: IStatus[],
	functions: {
		onCreate : (deal : IDeal) => void,
		onDelete : (id : number) => void,
		onUpdate : (deal : IDeal) => void,
		onSearch : (str : string) => void
	}
}

export const DealList = ( {deals, statuses, functions} : DealListProps) => {
	return (
		<div className="container bg-gray-700 mt-5 p-8 rounded-md">
			<DealsMenager functions={{onCreate: functions.onCreate, onSearch: functions.onSearch}}/>
			{deals.map(d => (
				<Deal
					key={d.id - 1}
					deal={d}
					statuses={statuses}
					onUpdateDeal={functions.onUpdate}
					onDelete={functions.onDelete}
				/>
			))}
		</div>
	)
}