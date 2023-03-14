import React, { useState } from 'react'
import { CategoryType, apiCategory } from '../../views/VirtualData'

const AddOrEditCategory = ({ category }: { category: null | CategoryType }) => {


  if (!category) {

    return (
      <form action="" method="post" className="p-3">
        <div>
          <label className='w-100'>
            <span>Name</span>
            <input type="text" name="firstname" className="form-control w-100 rounded-0 p-2" placeholder='Category Name' />
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

    <form action="" method="post" className="p-3">
      <div>
        <label>
          <span>Name</span>
          <input type="text" name="firstname" className="form-control w-100 rounded-0 p-2" value={category.name} />
        </label>
      </div>
      <div className='my-4'>
        <label>
          <span>Description</span>
        </label>
        <textarea name="description" cols={100} rows={10} className='w-100 p-2 border' placeholder='Description' value={category.description}></textarea>
      </div>
      <div><a href="#" className="fd-btn w-25 text-center">UPDATE CATEGORIE</a></div>
    </form>
  )

}

const ListOfCategories = ({ setCategory, setPage }: { setCategory: Function, setPage: Function }) => {

  const parseCategory = (category: CategoryType) => {
    setCategory(category);
    setPage('add');
  }

  let count = 0;

  return (
    <div className="table-responsive">
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
            apiCategory.map(categorie => {
              return (
                <tr className="p-3">
                  <td scope="row w-25">{++count}</td>
                  <td className='fw-bold'>{categorie.name}</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                  <td className='fw-bold d-flex gap-2 justify-content-center'>

                    <a href="#" className='p-2 rounded-2 fd-bg-primary' onClick={(e) => parseCategory(categorie)} title='View Product'><i className="bi bi-eye"></i></a>
                    <a href="#" className='p-2 rounded-2 bg-secondary' onClick={(e) => parseCategory(categorie)} title='Edit'><i className="bi bi-pen"></i></a>
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
        {page === 'list' ? <ListOfCategories setCategory={setCurrentCatetegory} setPage={setPage} /> : <AddOrEditCategory category={currentCatetegory} />}
      </div>
    </div>
  )
}

export default CategoryMain