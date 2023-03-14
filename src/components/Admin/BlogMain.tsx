import React, { useState } from 'react'
import { blogInfo } from '../../views/VirtualData'
import { BlogType } from '../Blog'


const AddOrEditBlog = ({ blog }: { blog: null | BlogType }) => {


    if (!blog) {

        return (
            <form action="" method="post" className="p-3">
                <div>
                    <label className='w-100'>
                        <span>Image</span>
                        <input type="file" name="post_image" className="form-control w-100 rounded-0 p-2" placeholder='Post Image' />
                    </label>
                </div>
                <div className='my-4'>
                    <label className='w-100'>
                        <span>Title</span>
                        <input type="text" name="title" className="form-control w-100 rounded-0 p-2" placeholder='Post Title' />
                    </label>
                </div>
                <div>
                    <label>
                        <span>Content</span>
                    </label>
                    <textarea name="content" cols={100} rows={10} className='w-100 p-2 border' placeholder='...'></textarea>
                </div>
                <div className='mt-4'><a href="#" className="fd-btn w-25 text-center">SAVE NOW</a></div>
            </form>
        )
    }

    return (

        <form action="" method="post" className="p-3">
            <div className="post-image w-50 mx-auto mb-3"><img src={blog.img} alt={blog.title} className='w-100 h-100 rounded-2'/></div>
            <div>
                <label className='w-100'>
                    <span>Image</span>
                    <input type="file" name="post_image" className="form-control w-100 rounded-0 p-2" placeholder='Post Image' />
                </label>
            </div>
            <div className='my-4'>
                <label className='w-100'>
                    <span>Title</span>
                    <input type="text" name="title" className="form-control w-100 rounded-0 p-2" value={blog.title} />
                </label>
            </div>
            <div>
                <label>
                    <span>Content</span>
                </label>
                <textarea name="content" cols={100} rows={10} className='w-100 p-2 border' value={blog.content}></textarea>
            </div>
            <p><span>Post By : </span> <span>{blog.authorName}</span></p>
            <div className='mt-4'><a href="#" className="fd-btn w-25 text-center">UPDATE POST</a></div>
        </form>
    )

}


const ListOfBlog = ({ setBlog, setPage }: { setBlog: Function, setPage: Function }) => {

    const parseBlog = (blog: BlogType) => {
        setBlog(blog);
        setPage('add');
    }
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
                                        <a href="#" className='p-2 rounded-2 fd-bg-primary' onClick={(e) => parseBlog(blog)}><i className="bi bi-eye"></i></a>
                                        <a href="#" className='p-2 rounded-2 bg-secondary' onClick={(e) => parseBlog(blog)}><i className="bi bi-pen"></i></a>
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

    const [page, setPage] = useState('list');
    const [currentBlog, setCurrentBlog] = useState(null);

    const changeToList = () => { setPage('add'); setCurrentBlog(null) }
    const changeToAdd = () => { setPage('list'); }

    return (
        <div className='text-black'>
            <h4 className="fw-bold">BLog</h4>
            <div className="add-product my-3 d-flex justify-content-end">
                {
                    page === 'list' ?
                        <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToList}>ADD POST</a> :
                        <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToAdd}>BLOG LIST</a>
                }
            </div>
            <div className="subPartMain">
                {page === 'list' ? <ListOfBlog setBlog={setCurrentBlog} setPage={setPage} /> : <AddOrEditBlog blog={currentBlog} />}
            </div>
        </div>
    )
}

export default BlogMain