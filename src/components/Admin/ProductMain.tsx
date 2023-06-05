import React, { useState, SyntheticEvent, useEffect, useRef, ChangeEvent } from 'react'
import { ProductType } from '../ProductCart'
import { useCreateProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useUpdateProductMutation } from '../../store/apiquery/productApiSlice';
import { link } from '../../Utils/Generals';
import Swal from 'sweetalert2';
import Spinner from '../Spinner';
import { HandleResult } from '../HandleResult';
import { useGetAllCategoriesQuery } from '../../store/apiquery/categoryApiSlice';
import { CategoryType } from '../../views/VirtualData';

let imageIsChanged = false;

const UpdateProduct = ({product}: {product : ProductType}) => {

	const { data : categories } = useGetAllCategoriesQuery('api/categories')

	const [updateData, setUpdateData] = useState(product);
	const [updateProduct, udpateResult] = useUpdateProductMutation();
	const imageTag = useRef<HTMLImageElement>(null);

	const handleSubmit = (e: SyntheticEvent) => {

		e.preventDefault();
		const form = new FormData(e.target as HTMLFormElement);
		form.append('_method', 'patch');
		form.append('imageEdited', imageIsChanged.toString());
		form.append('reviews', '5'); // Pour le moment
		updateProduct(form);
		imageIsChanged = false;

	}

	const handleUpdateValue = (e: SyntheticEvent) => {

		const target = e.target as HTMLInputElement;

		if (target.name === 'img' && imageTag.current && target.files) {

			imageIsChanged = true;
			imageTag.current.src = URL.createObjectURL(target.files[0]);
		}
		setUpdateData(prevState => ({ ...prevState, [target.name]: target.value }));

	}
	// udpateResult.isError ? console.log(JSON.stringify(udpateResult.error)) : udpateResult;

	return (
		<form action="" method="patch" className="checkout-service p-3" onSubmit={handleSubmit}>
			<input type="hidden" name="id" value={updateData.id}/>
			<div className="w-25 mx-auto p-3 border border-1 rounded-5 fd-hover-border-primary" style={{ height: '250px' }}><img src={link(product.img)} alt={product.name} className='w-100 h-100' ref={imageTag}/></div>
			<div className='d-flex gap-2'>
				<label className='w-50'>
					<span>Name</span>
					<input type="text" name="name" className="form-control w-100 rounded-0 p-2" value={updateData.name} onChange={handleUpdateValue} />
				</label>
				<label className='w-50'>
					<span>Image</span>
					<input type="file" name="img" className="form-control w-100 rounded-0 p-2" placeholder='Change Image' onChange={handleUpdateValue}/>
				</label>
			</div>
			<div className='d-grid grid-4 gap-2 mt-3'>
				<label>
					<span>Price</span>
					<input type="number" name="price" className="form-control w-100 rounded-0 p-2" value={updateData.price} onChange={handleUpdateValue} />
				</label>
				<label>
					<span>Old Price</span>
					<input type="number" name="old_price" className="form-control w-100 rounded-0 p-2" value={updateData.old_price} onChange={handleUpdateValue} />
				</label>
				<label>
					<span>Quantity</span>
					<input type="number" name="total_quantity" className="form-control w-100 rounded-0 p-2" value={updateData.total_quantity} onChange={handleUpdateValue} />
				</label>
				<label>
					<span>Reduction</span>
					<input type="text" name="reduction" className="form-control w-100 rounded-0 p-2" value={updateData.reduction ?? 0} onChange={handleUpdateValue} />
				</label>
			</div>
			<div className='mt-4'>
					<label className='w-100'>
						<span>Category</span>
						<select name="categorie_id" className='form-select w-100'>
							<option value="">Select Category</option>
                            {
								categories && categories.data.map((category : CategoryType) => (
                                    <option key={category.id} value={category.id}
										selected={product.categorie_id == category.id ? true : false}>
										{category.name}
									</option>
                                ))
							}
						</select>
					</label>
				</div>
			<div className='my-4'>
				<label>
					<span>Description</span>
				</label>
				<textarea name="desc" cols={100} rows={10} className='w-100 p-2 border' placeholder='Description' value={updateData.desc} onChange={handleUpdateValue}></textarea>
			</div>
			<div>
				<label>
					<input type="checkbox" name="deal_of_day" />
					<span className='ms-2'>Deal Of Day</span>
				</label>
			</div>
			<div className='mt-4'>
				<HandleResult result={udpateResult} />
			</div>
			<div className='mt-3'>{udpateResult.isLoading ?
				<button className="fd-btn w-25 text-center border-0"><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
					Loading...</button> :
				<button className="fd-btn w-25 text-center border-0" type='submit'>UPDATE PRODUCT</button>
			}</div>
		</form>
	)


}


const AddOrEditProduct = ({ product }: { product: null | ProductType }) => {

	const [image, setImage] = useState<Blob | null>(null);
	const [data, setData] = useState({});

	const { data : categories } = useGetAllCategoriesQuery('api/categories')

	const [createProduct, result] = useCreateProductMutation();


	const handleSubmit = (e: SyntheticEvent) => {

		e.preventDefault();

		const form = new FormData(e.target as HTMLFormElement);
		form.append('reviews', '5'); // Pour le moment
		createProduct(form);

	}

	const handleValue = (e: SyntheticEvent) => {

		const target = e.target as HTMLInputElement | HTMLTextAreaElement;
		setData(values => ({ ...values, [target.name]: target.value}));

	}


	if (!product) {

		return (
			<form action="" method="post" className="checkout-service p-3 .form-product" onSubmit={handleSubmit}>
				{image &&
					<div className="w-25 mx-auto p-3 border border-1 rounded-5 fd-hover-border-primary mb-4" style={{ height: '250px' }}>
						<img src={URL.createObjectURL(image)} alt="Product Image Preview" className='w-100 h-100' />
					</div>
				}	
				<div className='d-flex gap-2'>
					<label className='w-50'>
						<span>Name</span>
						<input type="text" name="name" className="form-control w-100 rounded-0 p-2" placeholder='Product Name' onChange={handleValue} />
					</label>
					<label className='w-50'>
						<span>Image</span>
						<input type="file" name="img" className="form-control w-100 rounded-0 p-2" placeholder='Product Image'
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								const file = e.target.files && e.target.files[0];
								setImage(file)
							}} accept='image/*' />
					</label>
				</div>
				<div className='d-grid grid-4 gap-2 mt-3'>
					<label>
						<span>Price</span>
						<input type="number" step={0.1} name="price" className="form-control w-100 rounded-0 p-2" placeholder='Product Price' onChange={handleValue} />
					</label>
					<label>
						<span>Old Price</span>
						<input type="number" step={0.1} name="old_price" className="form-control w-100 rounded-0 p-2" placeholder='Old Price' onChange={handleValue} />
					</label>
					<label>
						<span>Quantity</span>
						<input type="number" name="total_quantity" className="form-control w-100 rounded-0 p-2" placeholder='Total Quantity' onChange={handleValue} />
					</label>
					<label>
						<span>Reduction</span>
						<input type="text" name="reduction" className="form-control w-100 rounded-0 p-2" value={0} placeholder='Reduction ?' onChange={handleValue} />
					</label>
				</div>
				<div className='mt-4'>
					<label className='w-100'>
						<span>Category</span>
						<select name="categorie_id" className='form-select w-100'>
							<option value="">Select Category</option>
                            {
								categories && categories.data.map((category : CategoryType) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))
							}
						</select>
					</label>
				</div>
				<div className='my-4'>
					<label>
						<span>Description</span>
					</label>
					<textarea name="desc" cols={100} rows={10} className='w-100 p-2 border' placeholder='Description' onChange={handleValue}></textarea>
				</div>
				<div className="mt-3">
					<HandleResult result={result} />
				</div>
				<div className='mt-3'>{result.isLoading ?
					<button className="fd-btn w-25 text-center border-0"><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
						Loading...</button> :
					<button className="fd-btn w-25 text-center border-0">SAVE NOW</button>
				}</div>
			</form>
		)
	}


	return <UpdateProduct product={product} />
}

const ListOfProducts = ({ setProduct, setPage }: { setProduct: Function, setPage: Function }) => {

	const { isLoading, data: productsList, isSuccess, isError } = useGetAllProductsQuery('api/products');
	const [deleteProduct, deletedResult] = useDeleteProductMutation();

	const parseProduct = (product: ProductType) => {
		setProduct(product);
		setPage('add');
	}

	const deleteItem = (id: number) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "Are you sure to delete this product ?",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((r) => {
			if (r.isConfirmed) {
				deleteProduct(id);
			}
		});
	}

	let content: React.ReactNode;

	content = isLoading || isError
		? null
		: isSuccess
			? productsList['data'].map((product: ProductType) => {

				return (
					<tr className="p-3" key={product.id}>
						<td scope="row w-25"><img src={link(product.img)} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
						<td className='fw-bold'>{product.name}</td>
						<td>{product.price}</td>
						<td>{product.total_quantity}</td>
						<td className='fw-bold d-flex gap-2 justify-content-center'>

							<a href="#" className='p-2 rounded-2 fd-bg-primary' onClick={(e) => parseProduct(product)} title='View Product'><i className="bi bi-eye"></i></a>
							<a href="#" className='p-2 rounded-2 bg-secondary' onClick={(e) => parseProduct(product)} title='Edit'><i className="bi bi-pen"></i></a>
							<a href="#" className='p-2 rounded-2 bg-danger' title='Delete' onClick={(e) => {
								e.preventDefault();
								deleteItem(product.id)
							}}><i className="bi bi-trash"></i></a>
						</td>
					</tr>
				)
			})
			: null;



	return (
		!isLoading ?
			<div className="table-responsive">
				<table className="table table-default text-center table-bordered">
					<thead>
						<tr className='fd-bg-primary text-white'>
							<th scope="col" className='p-3'>IMAGE</th>
							<th scope="col" className='p-3'>PRODUCT NAME</th>
							<th scope="col" className='p-3'>PRICE</th>
							<th scope="col" className='p-3'>TOTAL STOCK</th>
							<th scope="col" className='p-3'>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{content}
					</tbody>
				</table>
			</div> :
			<Spinner />
	);
}

const ProductMain = () => {

	const [page, setPage] = useState('list');
	const [currentProduct, setCurrentProduct] = useState(null);

	const changeToList = () => { setPage('add'); setCurrentProduct(null) }
	const changeToAdd = () => { setPage('list'); }

	useEffect(() => setPage('list'), []);

	return (
		<div className='text-black'>
			<h4 className="fw-bold">Products</h4>
			<div className="add-product my-3 d-flex justify-content-end">
				{
					page === 'list' ?
						<a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToList}>ADD PRODUCT</a> :
						<a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToAdd}>PRODUCTS LIST</a>
				}
			</div>
			<div className="subPartMain">
				{page === 'list' ? <ListOfProducts setProduct={setCurrentProduct} setPage={setPage} /> : <AddOrEditProduct product={currentProduct} />}
			</div>
		</div>
	)
}

export default ProductMain