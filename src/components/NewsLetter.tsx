import React from 'react'

const NewsLetter = () => {

  return (
      <div className='fd-bg-secondary d-flex justify-content-between p-5'>
          <div className='d-flex gap-2'>
              <div className='align-self-center'><i className='bi bi-mailbox fa-3x'></i></div>
              <div>
                  <h5 className='fw-bold'>Newsletter</h5>
                  <p className="opacity-75">Subscribe here to get every single updates</p>
              </div>
          </div>
          <div className='d-flex'>
              <input type="text" placeholder='ENTER YOUR EMAIL ADDRESS' className='form-control d-block fw-bold bg-dark border-0 outline-none'/>
              <a href="#" className="fd-btn text-white">SUBSCRIBE</a>
          </div>
      </div>
  )
}

export default NewsLetter