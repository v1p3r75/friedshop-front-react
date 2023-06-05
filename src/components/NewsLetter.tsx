import React from 'react'

const NewsLetter = () => {

  return (
      <div className='fd-bg-secondary d-flex justify-content-between p-5'>
          <div className='d-flex gap-2'>
              <div className='align-self-center'><img src="/img/subscribe.png" alt="subscribe img" /></div>
              <div>
                  <h5 className='fw-bold'>Newsletter</h5>
                  <p className="opacity-75">Subscribe here to get every single updates</p>
              </div>
          </div>
          <form action="" className='d-flex w-30'>
                <input type="text" placeholder='ENTER YOUR EMAIL ADDRESS' className='form-control d-block w-75 fw-bold bg-dark border-0 text-white opacity-50'/>
                <a href="#" className="fd-btn text-white" style={{lineHeight : '50px'}}>SUBSCRIBE</a>
            </form>
      </div>
  )
}

export default NewsLetter