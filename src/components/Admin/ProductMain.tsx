import React, { useCallback, useState } from 'react'
import { productsTest } from '../../views/VirtualData'
import { ProductType } from '../ProductCart'

const AddOrEditProduct = ({ product }: { product: null | ProductType}) => {


  if (!product) {

    return (
      <form action="" method="post" className="checkout-service p-3">
        <div className='d-flex gap-2'>
          <label className='w-50'>
            <span>Name</span>
            <input type="text" name="firstname" className="form-control w-100 rounded-0 p-2" placeholder='Product Name' />
          </label>
          <label className='w-50'>
            <span>Image</span>
            <input type="file" name="image" className="form-control w-100 rounded-0 p-2" placeholder='Product Image' />
          </label>
        </div>
        <div className='d-grid grid-4 gap-2 mt-3'>
          <label>
            <span>Price</span>
            <input type="number" name="price" className="form-control w-100 rounded-0 p-2" placeholder='Product Price' />
          </label>
          <label>
            <span>Old Price</span>
            <input type="number" name="old_price" className="form-control w-100 rounded-0 p-2" placeholder='Old Price' />
          </label>
          <label>
            <span>Quantity</span>
            <input type="number" name="image" className="form-control w-100 rounded-0 p-2" placeholder='Total Quantity' />
          </label>
          <label>
            <span>Reduction</span>
            <input type="text" name="price" className="form-control w-100 rounded-0 p-2" value={0} placeholder='Reduction ?' />
          </label>
        </div>
        <div className='my-4'>
          <label>
            <span>Description</span>
          </label>
          <textarea name="description" cols={100} rows={10} className='w-100 p-2 border' placeholder='Description'></textarea>
        </div>
        <div><a href="#" className="fd-btn w-25 text-center">SAVE NOW</a></div>
      </form>
    )
  }

  return (
    <form action="" method="post" className="checkout-service p-3">
      <div className="w-25 mx-auto p-3 border border-1 rounded-5 fd-hover-border-primary" style={{height : '250px'}}><img src={product.img} alt={product.name} className='w-100 h-100'/></div>
      <div className='d-flex gap-2'>
        <label className='w-50'>
          <span>Name</span>
          <input type="text" name="firstname" className="form-control w-100 rounded-0 p-2" value={product.name} />
        </label>
        <label className='w-50'>
          <span>Image</span>
          <input type="file" name="image" className="form-control w-100 rounded-0 p-2" placeholder='Change Image' />
        </label>
      </div>
      <div className='d-grid grid-4 gap-2 mt-3'>
        <label>
          <span>Price</span>
          <input type="number" name="price" className="form-control w-100 rounded-0 p-2" value={product.price} />
        </label>
        <label>
            <span>Old Price</span>
            <input type="number" name="old_price" className="form-control w-100 rounded-0 p-2" value={product.oldPrice} />
          </label>
        <label>
          <span>Quantity</span>
          <input type="number" name="image" className="form-control w-100 rounded-0 p-2" value={200} />
        </label>
        <label>
          <span>Reduction</span>
          <input type="text" name="price" className="form-control w-100 rounded-0 p-2" value={product.reduction ?? 0} />
        </label>
      </div>
      <div className='my-4'>
        <label>
          <span>Description</span>
        </label>
        <textarea name="description" cols={100} rows={10} className='w-100 p-2 border' placeholder='Description' value={product.desc}></textarea>
      </div>
      <div><a href="#" className="fd-btn w-25 text-center">UPDATE PRODUCT</a></div>
    </form>
  )

}

const ListOfProducts = ({setProduct} : {setProduct : Function}) => {

  return (
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
          {
            productsTest.map(product => {
              return (
                <tr className="p-3" key={product.name}>
                  <td scope="row w-25"><img src={product.img} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                  <td className='fw-bold'>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{45}</td>
                  <td className='fw-bold d-flex gap-2 justify-content-center'>
                    
                    <a href="#" className='p-2 rounded-2 fd-bg-primary'><i className="bi bi-eye"></i></a>
                    <a href="#" className='p-2 rounded-2 bg-secondary'><i className="bi bi-pen"></i></a>
                    <a href="#" className='p-2 rounded-2 bg-danger'><i className="bi bi-trash"></i></a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

const ProductMain = () => {

  const [productPage, setProductPage] = useState('list');
  const [currentProduct, setCurrentProduct] = useState(null);

  // const parseProduct = () => { setCurrentProduct(currentProduct); }
  const changeToList = () => { setProductPage('add'); }
  const changeToAdd = () => { setProductPage('list'); }

  return (
    <div className='text-black'>
      <h4 className="fw-bold">List of products</h4>
      <div className="add-product my-3 d-flex justify-content-end">
        {
          productPage === 'list' ?
            <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToList}>ADD PRODUCT</a> :
            <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToAdd}>PRODUCTS LIST</a>
        }
      </div>
      <div className="subPartMain">
        {productPage === 'list' ? <ListOfProducts setProduct={setCurrentProduct} /> : <AddOrEditProduct product={currentProduct} />}
      </div>
    </div>
  )
}

export default ProductMain