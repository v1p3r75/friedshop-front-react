import React from 'react'
import Header from './includes/Header'
import Banner from '../components/Banner'
import Footer from './includes/Footer'

const ContactUs = () => {


  return (
    <>
        <Header />
        <Banner page='Contact Us' path={['Home', 'Contact Us']} />
        
        <div className="contact-form d-flex gap-3 justify-content-between px-3 px-lg-5" style={{margin : '150px 0'}}>
            <div className="col-12 col-lg-7 c-form text-black">
                <h2 className="fw-bold">Get In Touch</h2>
                <form action="">
                    <div className='d-flex gap-2 mt-5'>
                        <div className='position-relative w-50'>
                            <input type="text" name="name" className="form-control w-100 rounded-0 p-2 px-3" placeholder='Your Name' />
                            <div className="position-absolute fd-color-primary" style={{top : '20%', right: '5%'}}><i className="bi bi-person"></i></div>
                        </div>
                        <div className='position-relative w-50'>
                            <input type="email" name="email" className="form-control w-100 rounded-0 p-2 px-3" placeholder='Your Email' />
                            <div className="position-absolute fd-color-primary" style={{top : '20%', right: '5%'}}><i className="bi bi-envelope"></i></div>
                        </div>
                    </div>
                    <div className='d-flex gap-2 my-5'>
                        <div className='position-relative w-50'>
                            <input type="text" name="phone" className="form-control w-100 rounded-0 p-2 px-3" placeholder='Your Phone' />
                            <div className="position-absolute fd-color-primary" style={{top : '20%', right: '5%'}}><i className="bi bi-phone"></i></div>
                        </div>
                        <div className='position-relative w-50'>
                            <input type="text" name="subject" className="form-control w-100 rounded-0 p-2 px-3" placeholder='Your Subject' />
                            <div className="position-absolute fd-color-primary" style={{top : '20%', right: '5%'}}><i className="bi bi-bookmark-fill"></i></div>
                        </div>
                    </div>
                    <div className='position-relative w-100 mb-4'>
                        <textarea name="description" id="usernameMessage" cols={100} rows={10} placeholder='Write Message...' className='w-100 p-2 border'></textarea>
                        <div className="position-absolute fd-color-primary" style={{top : '5%', right: '1%'}}><i className="bi bi-pen"></i></div>
                    </div>
                    <div><a href="#" className="fd-btn w-50 text-center">SEND MESSAGE</a></div>
                </form>
            </div>
            <div className="position-relative contact-banner d-none d-lg-block p-4 col-3" style={{backgroundImage : "url('/img/contact.jpg')", backgroundSize: 'cover', backgroundRepeat : 'no-repeat'}}>
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{zIndex : '1', backgroundColor: 'rgba(123,175,0,0.45)'}}></div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default ContactUs