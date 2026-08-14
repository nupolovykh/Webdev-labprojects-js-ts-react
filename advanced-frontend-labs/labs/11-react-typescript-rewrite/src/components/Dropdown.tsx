import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { IStatus } from '../models/StatusModel';
import { IDeal } from '../models/DealModel';
import { DropdownItem } from './DropdownItem';

interface DropDownProps {
	statuses: IStatus[]
    deal: IDeal
	onUpdate : (deal : IDeal) => void
}

export const DropDown = ({statuses, deal, onUpdate} : DropDownProps) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div /*className="relative" => anomaly with modal*/>
            <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white bg-gray-700 hover:bg-gray-800 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex 
                items-center dark:bg-gray-600 dark:hover:bg-gray-700 
                dark:focus:ring-gray-800 w-36"
                type="button"
                onClick={toggleDropdown}>
                <span className="mr-1">{statuses.find(s => s.id === deal.statusId)?.name}</span>
				<IoIosArrowDropdown className="text-xl"/>
            </button>

            {isDropdownOpen && (
                <div id="dropdownHover"
                    className="z-10 absolute bg-white divide-y divide-gray-100 
                    rounded-lg shadow w-44 dark:bg-gray-700">

                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton">

                    {statuses.map((status) => (
                        <DropdownItem key={status.id} statusId={status.id} str={status.name} deal={deal} onUpdate={onUpdate}/>
                    ))}

                    </ul>
                </div>
            )}
        </div>
    )
}