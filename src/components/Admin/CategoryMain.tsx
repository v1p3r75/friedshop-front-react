import React, { useState, SyntheticEvent } from 'react'
import { CategoryType } from '../../views/VirtualData'
import { useGetAllCategoriesQuery,useUpdateCategoryMutation, useCreateCategoryMutation, useDeleteCategoryMutation } from "../../store/apiquery/categoryApiSlice"
import Swal from 'sweetalert2';
import Spinner from '../Spinner';
import { HandleResult } from '../HandleResult';


const UpdateCategory = ({category}: {category : CategoryType}) => {

	const [updateData, setUpdateData] = useState(category);
	const [updateCategory, udpateResult] = useUpdateCategoryMutation();

	const handleSubmit = (e: SyntheticEvent) => {

		e.preventDefault();
		const form = new FormData(e.target as HTMLFormElement);
		form.append('_method', 'patch');
		updateCategory(form);

	}

	const handleUpdateValue = (e: SyntheticEvent) => {

		const target = e.target as HTMLInputElement;
		setUpdateData(prevState => ({ ...prevState, [target.name]: target.value }));

	}

	return (
		<form action="" method="patch" className="checkout-service p-3" onSubmit={handleSubmit}>
			<input type="hidden" name="id" value={updateData.id} />
      <div>
          <label className='w-100'>
            <span>Name</span>
            <input type="text" name="name" value={updateData.name} className="form-control w-100 rounded-0 p-2" placeholder='Category Name' onChange={handleUpdateValue}/>
          </label>
        </div>
        <div className='my-4'>
          <label>
            <span>Description</span>
          </label>
          <textarea name="desc" cols={100} rows={10} value={updateData.desc} className='w-100 p-2 border' placeholder='Description' onChange={handleUpdateValue}></textarea>
        </div>
			<div className='mt-4'>
				<HandleResult result={udpateResult}/>
			</div>
			<div className='mt-3'>{udpateResult.isLoading ?
				<button className="fd-btn w-25 text-center border-0"><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
					Loading...</button> :
				<button className="fd-btn w-25 text-center border-0" type='submit'>UPDATE CATEGORY</button>
			}</div>
		</form>
	)


}

const AddOrEditCategory = ({ category }: { category: null | CategoryType }) => {

  const [data, setData] = useState({});

	const [createCategory, result] = useCreateCategoryMutation();


	const handleSubmit = (e: SyntheticEvent) => {

		e.preventDefault();

		const form = new FormData(e.target as HTMLFormElement);
		createCategory(form);

	}

	const handleValue = (e: SyntheticEvent) => {

		const target = e.target as HTMLInputElement;
		setData(values => ({ ...values, [target.name]: target.value }));

	}


  if (!category) {

    return (
      <form action="" method="post" className="p-3" onSubmit={handleSubmit}>
        <div>
          <label className='w-100'>
            <span>Name</span>
            <input type="text" name="name" className="form-control w-100 rounded-0 p-2" placeholder='Category Name' onChange={handleValue}/>
          </label>
        </div>
        <div className='my-4'>
          <label>
            <span>Description</span>
          </label>
          <textarea name="desc" cols={100} rows={10} className='w-100 p-2 border' placeholder='Description' onChange={handleValue}></textarea>
        </div>
        <div>
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

  return <UpdateCategory category={category} />

}

const ListOfCategories = ({ setCategory, setPage }: { setCategory: Function, setPage: Function }) => {

  const parseCategory = (category: CategoryType) => {
    setCategory(category);
    setPage('add');
  }
  const { isLoading, data: categoryList, isSuccess, isError } = useGetAllCategoriesQuery('api/categories');
  const [deleteCategory, deletedResult] = useDeleteCategoryMutation();

  const deleteItem = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure to delete this category ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((r) => {
      if (r.isConfirmed) {
        deleteCategory(id);
      }
    });
  }

  let content: React.ReactNode;
  let count = 0;

  content = isLoading || isError
    ? null
    : isSuccess
      ? categoryList['data'].map((category: CategoryType) => {

        return (
          <tr className="p-3" key={category.id}>
            <td scope="row w-25">{++count}</td>
            <td className='fw-bold'>{category.name}</td>
            <td>{category.desc}</td>
            <td className='fw-bold d-flex gap-2 justify-content-center'>
              <a href="#" className='p-2 rounded-2 fd-bg-primary' onClick={(e) => parseCategory(category)} title='View'><i className="bi bi-eye"></i></a>
              <a href="#" className='p-2 rounded-2 bg-secondary' onClick={(e) => parseCategory(category)} title='Edit'><i className="bi bi-pen"></i></a>
              <a href="#" className='p-2 rounded-2 bg-danger' title='Delete' onClick={(e) => deleteItem(Number(category.id))}><i className="bi bi-trash"></i></a>
            </td>
          </tr>
        )
      })
      : null;

  return (
    !isLoading ? <div className="table-responsive">
      <table className="table table-default text-center table-bordered">
        <thead>
          <tr className='fd-bg-primary text-white'>
            <th scope="col" className='p-3'>N°</th>
            <th scope="col" className='p-3'>NAME</th>
            <th scope="col" className='p-3'>DESCRIPTION</th>
            <th scope="col" className='p-3'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            content
          }
        </tbody>
      </table>
    </div> : <Spinner />
  );
}

const CategoryMain = () => {
  const [page, setPage] = useState('list');
  const [currentCatetegory, setCurrentCatetegory] = useState(null);

  const changeToList = () => { setPage('add'); setCurrentCatetegory(null) }
  const changeToAdd = () => { setPage('list'); }

  return (
    <div className='text-black'>
      <h4 className="fw-bold">Categories</h4>
      <div className="add-product my-3 d-flex justify-content-end">
        {
          page === 'list' ?
            <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToList}>ADD CATEGORY</a> :
            <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToAdd}>CATEGORY LIST</a>
        }
      </div>
      <div className="subPartMain">
        {page === 'list' ? <ListOfCategories setCategory={setCurrentCatetegory} setPage={setPage} /> :
          <AddOrEditCategory category={currentCatetegory} />}
      </div>
    </div>
  )
}

export default CategoryMain