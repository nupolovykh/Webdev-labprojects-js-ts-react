import React, { useEffect, useState } from 'react';
import { Product } from './components/product'
// import { products } from './data/products';
import axios from 'axios';
import { IProduct } from './models';

function App() {

	const[products, setProducts] = useState<IProduct[]>([])

	async function fetchProducts() {
		const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
		setProducts(response.data)
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return (
	<div className='container mx-auto max-w-2xl pt-5'>

		{products.map(p => <Product product={p} key={p.id}/>)}

	</div>
	)
}

export default App;
