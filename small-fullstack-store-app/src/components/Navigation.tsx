import React from "react"
import {Link} from "react-router-dom"

export function Navigation() {
	return (
		<nav className="h-[50px] items-center flex justify-between px-5 bg-gray-500 text-white">
			<span className="font-bold">React 2022-2024</span>
			<span>
				<Link to="/register" className="mr-2 text-white">Registration</Link>
 				<Link to="/login" className="mr-2 text-white">Authorization</Link>
				<Link to="/" className="mr-2 text-white">Products</Link>
				<Link to="/about" className=" text-white">About</Link>
			</span>
		</nav>
	)
}