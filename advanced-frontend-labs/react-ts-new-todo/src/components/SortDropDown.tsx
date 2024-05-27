import { useContext, useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { SortDropDownItem } from './SortDropDownItem';

interface SortDropDownProps{
    sort: {
		sortByDateAsc: () => void
		sortByDateDesc: () => void
		sortByTextAsc: () => void
		sortByTextDesc: () => void
	}
}


export const SortDropDown = ({sort} : SortDropDownProps) => {
    const [isDropdownOpen, setDropDownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropDownOpen(!isDropdownOpen);
    };

    return (
        <div /*className="relative" => anomaly with modal*/>
            <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white hover:bg-gray-600 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-auto bg-gray-500 border-none p-4 cursor-pointer ml-2 h-[58px]"
                type="button"
                onClick={toggleDropdown}
            >
                <span className="mr-1">Sort</span>
				<IoIosArrowDropdown className="text-xl"/>
            </button>

            {isDropdownOpen && (
                <div
                id="dropdownHover"
                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownHoverButton"
                    >
                        < SortDropDownItem str='text - asc' action={sort.sortByTextAsc} />
                        < SortDropDownItem str='text - desc' action={sort.sortByTextDesc} />
                        < SortDropDownItem str='date - asc' action={sort.sortByDateAsc} />
                        < SortDropDownItem str='date - deac' action={sort.sortByDateDesc} />
                    </ul>
                </div>
            )}
        </div>
    )
}