import React from 'react'
import { Link } from 'react-router-dom'
import { tags } from '../views/VirtualData'

export const Tag = ({tag_id, name} : {tag_id : number, name : string}) => {

  return <div className="tags text-dark mt-3">
      <span><Link to={"/"} className='text-dark fw-bold opacity-75 p-2 border border-1'>{name}</Link></span>
  </div>
}

const Tags = () => {

  return (
    <div className="w-100 p-4 text-black bg-white fd-hover-border-primary border border-1 mb-4">
        <h5 className='fw-bold'>Tags</h5>
        <div className='d-flex flex-wrap gap-2'>
          { tags.map((tag) => <Tag {...tag} key={tag.tag_id} />) }
        </div>
        
    </div>
  )
}

export default Tags