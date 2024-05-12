import { Product } from '../components/Product'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/Error'
import { useProducts } from '../hooks/UseProducts';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { useContext} from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModelContext';
// import { products } from './data/products';

export function ProductPage() {
    const {loading, error, products, addProduct} = useProducts()
	const {modal, open, close} = useContext(ModalContext)

	const createHandler = (product : IProduct) => {
		close()
		addProduct(product)
	}

	return (
		<div className='container mx-auto max-w-2xl pt-5'>
			{ loading && <Loader/>}
			{ error && <ErrorMessage error={error} />}
			{ products.map(p => <Product product={p} key={p.id}/>)}

			{modal && <Modal title="Create new product" onClose={() => close()}>
				<CreateProduct onCreate={createHandler}/>
			</Modal>}

			<button className="fixed bottom-5 right-5 rounded-full bg-yellow-500 text-white text-2xl px-4 py-2" onClick={() => open()}>+</button>
		</div>
	)
}