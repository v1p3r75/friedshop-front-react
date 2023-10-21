import React from 'react'
import { BlogType } from './Blog'
import Tags, { Tag } from './Tags'
import { tags } from '../views/VirtualData'
import { SocialsNetworks } from './SocialsNetworks'

const BlogDetails = (props : BlogType) => {
  return (
    <div className='border border-1 p-3'>
       <div className="post-image" style={{height : '450px'}}><img src={props.img} alt={props.title} className='w-100 h-100'/></div>
       <div className="date-category my-4 d-flex gap-4">
        <div className='p-date fd-color-primary'><i className='bi bi-calendar-fill me-2'></i><span>{props.date}</span></div>
       </div>
       <h2 className='fw-bold'>{props.title}</h2>
       <div className="opacity-50">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, asperiores veniam nam recusandae in fuga porro suscipit cupiditate repudiandae possimus quisquam? A, ullam? In veritatis veniam possimus laboriosam, expedita quo!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci vitae, incidunt minus optio odit atque hic, eum cumque autem architecto quam corrupti, aliquam cum sed! Impedit temporibus ipsum eum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nisi esse quibusdam dicta minima rerum doloribus, nihil dolorum ipsum vel numquam totam animi iure quas. Sunt doloribus voluptas quisquam sapiente.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, asperiores veniam nam recusandae in fuga porro suscipit cupiditate repudiandae possimus quisquam? A, ullam? In veritatis veniam possimus laboriosam, expedita quo!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci vitae, incidunt minus optio odit atque hic, eum cumque autem architecto quam corrupti, aliquam cum sed! Impedit temporibus ipsum eum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nisi esse quibusdam dicta minima rerum doloribus, nihil dolorum ipsum vel numquam totam animi iure quas. Sunt doloribus voluptas quisquam sapiente.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, asperiores veniam nam recusandae in fuga porro suscipit cupiditate repudiandae possimus quisquam? A, ullam? In veritatis veniam possimus laboriosam, expedita quo!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci vitae, incidunt minus optio odit atque hic, eum cumque autem architecto quam corrupti, aliquam cum sed! Impedit temporibus ipsum eum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nisi esse quibusdam dicta minima rerum doloribus, nihil dolorum ipsum vel numquam totam animi iure quas. Sunt doloribus voluptas quisquam sapiente.
            </p>
       </div>
       <div className="tags">
        <div className='d-flex gap-2 flex-wrap'><span className="fw-bold align-self-end">Tags :</span>{ tags.map((tag) => <Tag {...tag} key={tag.tag_id} />) }</div>
       </div>
       <div className="p-share d-flex flex-wrap gap-2 text-black mt-5">
        <h6 className='fw-bold'>Share </h6>
        <SocialsNetworks addClass='text-black border border-1 p-2 px-3'/>
       </div>
    </div>
  )
}

export default BlogDetails