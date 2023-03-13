import React from 'react'
import { blogInfo } from '../../views/VirtualData'

const ListOfPosts = () => {

  let count = 0;

  return (
  <div className="table-responsive">
        <table className="table table-default text-center table-bordered">
            <thead>
                <tr className='fd-bg-primary text-white'>
                    <th scope="col" className='p-3'>N°</th>
                    <th scope="col" className='p-3'>TITLE</th>
                    <th scope="col" className='p-3'>SUMMARY</th>
                    <th scope="col" className='p-3'>DATE</th>
                    <th scope="col" className='p-3'>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogInfo.map(blog => {
                        return (
                            <tr className="p-3">
                                <td scope="row w-25">{++count}</td>
                                <td className='fw-bold'>{blog.title}</td>
                                <td className='opacity-75'>{blog.content}</td>
                                <td className='opacity-75'>{blog.date}</td>
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

const BlogMain = () => {
  return (
    <div className='text-black'>
        <h4 className="fw-bold">List of Posts</h4>
        <div className="add-product my-3 d-flex justify-content-end">
          <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3">ADD POST</a>
        </div>
        <div className="subPartMain">
          <ListOfPosts />
        </div>
    </div>
  )
}

export default BlogMain