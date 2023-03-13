import React from 'react'
import { searchData } from '../views/VirtualData'
import { Link } from 'react-router-dom'


export const Search = ({search_id, name} : {search_id : number, name : string}) => {

    return <div className="search-tags text-dark mt-3">
        <span><Link to={"/"} className='text-dark fw-bold opacity-75 p-2 border border-1'>{name}</Link></span>
    </div>
  }

const SearchCategory = ({type = 'recent'} : {type : string}) => {


  return (
    <div className='d-flex flex-wrap gap-2'>
        { searchData.map((search) => <Search {...search} key={search.search_id} />) }
    </div>
  )
}

export default SearchCategory