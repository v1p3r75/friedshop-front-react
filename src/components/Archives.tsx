import React from 'react'
import { Link } from 'react-router-dom'
import { archives } from '../views/VirtualData'

const Archives = () => {

  return (
    <div className="w-100 p-4 text-black bg-white fd-hover-border-primary border border-1">
        <h5 className='fw-bold'>Archives</h5>
        { archives.map((archives) => {
            return <div key={archives.archive_id} className="archive text-dark mt-3">
                <span><i className='bi bi-chevron-double-right me-2'></i><Link to={"/"} className='text-dark fw-bold opacity-75'>{archives.date}</Link></span>
            </div>
        })}
    </div>
  )
}

export default Archives