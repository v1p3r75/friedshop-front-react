import React from 'react'
import Swal from 'sweetalert2';
import { useDeleteUserMutation, useGetAllUsersQuery } from '../../store/apiquery/usersApiSlice';
import Spinner from '../Spinner';

const ListOfCustomers = () => {

  let count = 0;

  const { isLoading, data: customersList, isSuccess, isError } = useGetAllUsersQuery('api/users');
  const [deleteCustomer, deletedResult] = useDeleteUserMutation();

  const deleteItem = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure to delete this customer ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((r) => {
      if (r.isConfirmed) {
        deleteCustomer(id);
      }
    });
  }

  let content: React.ReactNode;

  content = isLoading || isError
    ? null
    : isSuccess
      ? customersList['data'].map((customer: any) => {

        return (
          <tr className="p-3" key={customer.id}>
            <td scope="row w-25">{++count}</td>
            <td className='fw-bold'>{customer.firstname}</td>
            <td className='fw-bold'>{customer.lastname}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{15}</td>
            <td className='fw-bold d-flex gap-2 justify-content-center'>
              <a href="#" className='p-2 rounded-2 bg-secondary' title='Block Customer'><i className="bi bi-person-x"></i></a>
              <a href="#" className='p-2 rounded-2 bg-danger' title='Delete' onClick={(e) => {
                e.preventDefault();
                deleteItem(customer.id)
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
            {content}
          </tbody>
        </table>
      </div> :
      <Spinner />
  )
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