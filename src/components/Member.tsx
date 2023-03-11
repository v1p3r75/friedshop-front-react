import React from 'react'

type MemberType = {
    img : string,
    name : string,
    role : string,
}

const Member = ({img, name, role} : MemberType) => {


  return (
    <div className='text-center text-black mb-3'>
        <div className="m-image w-50 mx-auto"><img src={img} alt={img} className='w-100 h-100' style={{borderRadius: '120px'}}/></div>
        <h4 className="fw-bold mt-2">{name}</h4>
        <p className='opacity-75'>{role}</p>
    </div>
  )
}

export default Member