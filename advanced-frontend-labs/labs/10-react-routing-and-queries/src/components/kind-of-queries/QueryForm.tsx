import React, { useState } from "react";
import axios from "axios";

interface IPost {
	title: string,
	body: string
}

interface IUser {
	name: string,
	email: string
}

interface QueryData {
	post: IPost,
	user: IUser
}

export const QuaryForm = () => {
	const [id, setId] = useState<number>(0)
	const [data, setData] = useState<QueryData | null>(null);
	const [error, setError] = useState('')


	const submitHandler = async (event : React.FormEvent) => {
		event.preventDefault()

		setData(null)
		
		if(id === null){
			setError('Enter another id')
			return;
		}

		try {
			const [qpost, quser] = await Promise.all([
				axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`),
				axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
			]);
			
			if(qpost.data && quser.data){
				setData({
					post: qpost.data,
					user: quser.data,
				})
			}
			else {
				setError('Enter another id')
			}
		}
		catch{
			setError('Request failed')
		}
	}

	const changeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
		setError('')
		try{
			let id = parseInt(event.target.value);
			setId(id)
		}
		catch{
			setError('Enter id as number')
		}
	}

	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					placeholder="Enter the userID"
					value = {id}
					onChange={changeHandler}
				/>
				{ error && <h2>{error}</h2> }

				<button type='submit'>Request</button>
			</form>
			
			{data && <div>
				<h1>Post</h1>
				<h3>{data?.post.title}</h3>
				<h3>{data?.post.body}</h3>
			</div> }

			{data && <div>
				<h1>User</h1>
				<h3>{data?.user.name}</h3>
				<h3>{data?.user.email}</h3>
			</div> }
		</>
	)
}