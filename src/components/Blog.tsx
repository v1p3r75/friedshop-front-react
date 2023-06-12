import React, { FC } from 'react'
import { Link } from 'react-router-dom';

export type BlogType = {
    date : string,
    img: string,
    title: string,
    content: string,
    authorName: string,
    authorImg: string,
};

const Blog = (props : BlogType) => {
    
  
    return (
        <div className="blog-article border border-1 bg-white overflow-auto" style={{minHeight: '400px'}}>
            <div className="position-relative h-50">
                <img src={props.img} className="w-100 h-100"/>
                <div className="position-absolute bottom-0 start-0 bg-white text-black px-4 py-2">
                    <span><i className="bi bi-calendar me-1"></i>{props.date}</span>
                </div>
            </div>
           <div className='p-3'>
           <Link to={"/blog/1"} className="blog-title my-2 fw-bold text-dark">{props.title}</Link>
            <p className='opacity-75 my-3'>{props.content}</p>
            <div className="d-flex justify-content-between">
                <div className='d-flex gap-2'>
                    <img src={props.authorImg} alt={props.authorName} className="rounded-5" style={{width : '40px', height : '40px'}}/>
                    <h6 className='align-self-center'>{props.authorName}</h6>
                </div>
                <Link to={"/blog/1"} className="fd-btn rounded-5 p-2 px-3 text-center"><i className="bi bi-arrow-right"></i></Link>
            </div>
           </div>
        </div>
    )

}



export default Blog