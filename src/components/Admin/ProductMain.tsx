import React from 'react'
import { productsTest } from '../../views/VitualData'

const CreateProduct = () => {

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
                            <tr className="p-3">
                                <td scope="row w-25"><img src={product.img} alt={product.name} style={{width : '50px', height : '50px'}}/></td>
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
  return (
    <div className='text-black'>
        <h4 className="fw-bold">List of products</h4>
        <div className="add-product my-3 d-flex justify-content-end">
          <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3">ADD PRODUCT</a>
        </div>
        <div className="subPartMain">
          <CreateProduct />
        </div>
    </div>
  )
}

export default ProductMain