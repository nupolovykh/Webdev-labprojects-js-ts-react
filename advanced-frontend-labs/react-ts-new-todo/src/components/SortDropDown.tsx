import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { SortDropDownItem } from './SortDropDownItem';
import { useDealsContext } from '../context/DealsContext';
import { ButtonVariant } from './DealsMenager';

interface SortDropDownProps {
    state: [ButtonVariant | null, (state : ButtonVariant) => void]
}

export const SortDropDown = ( {state} : SortDropDownProps) => {
    const [isDropdownOpen, setDropDownOpen] = useState(false);
    const { sort } = useDealsContext();

    const toggleDropdown = () => {
        state[1](ButtonVariant.dropDown) //ahah very nice
        setDropDownOpen(!isDropdownOpen);
    };

    const sortOptions = [
        { label: 'text - asc', action: sort.sortByTextAsc },
        { label: 'text - desc', action: sort.sortByTextDesc },
        { label: 'date - asc', action: sort.sortByDateAsc },
        { label: 'date - desc', action: sort.sortByDateDesc }
    ];

    return (
        <div /*className="relative" => anomaly with modal*/>
            <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white hover:bg-gray-600 font-medium rounded-lg text-sm 
                text-center inline-flex items-center dark:bg-gray-500 dark:hover:bg-gray-600 
                dark:focus:ring-gray-800 w-auto bg-gray-500 border-none p-4 cursor-pointer ml-2 h-[58px]"
                type="button"
                onClick={toggleDropdown}>

                <span className="mr-1">Sort</span>
				<IoIosArrowDropdown className="text-xl"/>
            </button>

            {isDropdownOpen && (
                <div id="dropdownHover"
                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg 
                shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownHoverButton">
                            
                        {sortOptions.map((option, index) => (
                            <SortDropDownItem key={index} label={option.label} action={option.action} />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}