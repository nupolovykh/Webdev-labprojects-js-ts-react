import { useContext, useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { SortContext } from '../context/SortContext';
import { SortDropDownItem } from './SortDropDownItem';


export const SortDropDown = () => {
    const [isDropdownOpen, setDropDownOpen] = useState(false);
    const {byDateAsc, byDateDesc, byTextAsc, byTextDesc} = useContext(SortContext)

    const toggleDropdown = () => {
        setDropDownOpen(!isDropdownOpen);
    };

    return (
        <div /*className="relative" => anomaly with modal*/>
            <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 w-36"
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
                        < SortDropDownItem str='text - asc' action={byTextAsc} />
                        < SortDropDownItem str='text - desc' action={byTextDesc} />
                        < SortDropDownItem str='date - asc' action={byDateAsc} />
                        < SortDropDownItem str='date - deac' action={byDateDesc} />
                    </ul>
                </div>
            )}
        </div>
    )
}