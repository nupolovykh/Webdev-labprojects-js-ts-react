import React, { useState } from "react"
import { DealsMenager } from "./DealsMenager"
import { Deal } from "./Deal";
import { IDeal } from "../models/DealModel";

interface DealListProps {
	deals : IDeal[]
	functions: {
		onCreate : (deal : IDeal) => void,
		onDelete : (deal : IDeal) => void,
		onUpdate : (deal : IDeal) => void,
		onSearch : (str : string) => void
	}
}

export const DealList = ( {deals, functions} : DealListProps) => {
	return (
		<div className="container bg-gray-700 mt-5 p-8 rounded-md">
			<DealsMenager functions={functions}/>
				{deals.map(d => (
					<Deal
						deal={d}
						onUpdate={functions.onUpdate}
					/>
				))}
		</div>
	)
}