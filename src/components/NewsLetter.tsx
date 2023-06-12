import React from 'react'

const NewsLetter = () => {

    return (
        <div className='fd-bg-secondary container-fluid'>
            <div className='row justify-content-between px-3 px-lg-5 py-5'>
                <div className='col-12 col-lg-6 d-lg-flex gap-lg-2 text-center text-lg-start align-self-center'>
                    <div><img src="/img/subscribe.png" alt="subscribe img"/></div>
                    <div className='mt-3 mt-lg-0'>
                        <h5 className='fw-bold'>Newsletter</h5>
                        <p className="opacity-75">Subscribe here to get every single updates</p>
                    </div>
                </div>
                <form action="" className='col-12 col-lg-6 d-flex flex-wrap'>
                    <input type="text" placeholder='ENTER YOUR EMAIL ADDRESS'
                        className='d-block p-3 col-12 col-lg-9 fw-bold bg-dark border-0 text-white opacity-50' />
                    <a href="#" className="fd-btn col-12 col-lg-3 mt-3 mt-lg-0 text-center text-white" style={{ lineHeight: '50px' }}>SUBSCRIBE</a>
                </form>
            </div>

        </div>
    )
}

export default NewsLetter