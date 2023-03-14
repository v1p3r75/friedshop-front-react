import React from 'react'
import { customers } from '../../views/VirtualData';

const ListOfCustomers = () => {

  let count = 0;

  return (
  <div className="table-responsive">
        <table className="table table-default text-center table-bordered">
            <thead>
                <tr className='fd-bg-primary text-white'>
                    <th scope="col" className='p-3'>N°</th>
                    <th scope="col" className='p-3'>FIRSTNAME</th>
                    <th scope="col" className='p-3'>LASTNAME</th>
                    <th scope="col" className='p-3'>EMAIL</th>
                    <th scope="col" className='p-3'>ADDRESS</th>
                    <th scope="col" className='p-3'>TOTAL ORDERS</th>
                    <th scope="col" className='p-3'>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map(customer => {
                        return (
                            <tr className="p-3">
                                <td scope="row w-25">{++count}</td>
                                <td className='fw-bold'>{customer.firstname}</td>
                                <td className='fw-bold'>{customer.lastname}</td>
                                <td>{customer.email}</td>
                                <td>{customer.address}</td>
                                <td>{15}</td>
                                <td className='fw-bold d-flex gap-2 justify-content-center'>
                                  <a href="#" className='p-2 rounded-2 bg-secondary' title='Block Customer'><i className="bi bi-person-x"></i></a>
                                  <a href="#" className='p-2 rounded-2 bg-danger' title='Delete'><i className="bi bi-trash"></i></a>
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

const CustomersMain = () => {
  return (
    <div className='text-black'>
        <h4 className="fw-bold mb-5">List of Customers</h4>
        <div className="subPartMain">
          <ListOfCustomers />
        </div>
    </div>
  )
}

export default CustomersMain