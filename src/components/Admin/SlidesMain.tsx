import React, { useCallback, useState } from 'react'
import { Slide, apiSlidesInfo } from '../../views/VirtualData'

const AddOrEditSlide = ({ slide }: { slide: null | Slide}) => {


  if (!slide) {

    return (
      <form action="" method="post" className="checkout-service p-3">
        <div className='mt-4'>
          <label className='w-100'>
            <span>Image</span>
            <input type="file" name="image" className="form-control w-100 rounded-0 p-2" />
          </label>
          <label className='w-100 mt-4'>
            <span>Text</span>
            <input type="text" name="text" className="form-control w-100 rounded-0 p-2" placeholder='Slide Text' />
          </label>
        </div>
        <div className='mt-3'><a href="#" className="fd-btn w-25 text-center">SAVE NOW</a></div>
      </form>
    )
  }

  return (
    <form action="" method="post" className="checkout-service p-3">
        <div className="w-100 mx-auto p-3 border border-1 rounded-5 fd-hover-border-primary" style={{height : '450px'}}><img src={slide.url} alt={slide.alt} className='w-100 h-100'/></div>
        <div className='mt-4'>
          <label className='w-100'>
            <span>Image</span>
            <input type="file" name="image" className="form-control w-100 rounded-0 p-2"/>
          </label>
          <label className='w-100 mt-4'>
            <span>Text</span>
            <input type="text" name="text" className="form-control w-100 rounded-0 p-2" value={slide.text}/>
          </label>
        </div>
      <div className='mt-4'><a href="#" className="fd-btn w-25 text-center">UPDATE SLIDE</a></div>
    </form>
  )

}

const ListOfProducts = ({setSlide, setPage} : {setSlide : Function, setPage : Function}) => {

  const parseSlide = (slide : Slide) => {
    setSlide(slide);
    setPage('add');
  }

  return (
    <div className="table-responsive">
      <table className="table table-default text-center table-bordered">
        <thead>
          <tr className='fd-bg-primary text-white'>
            <th scope="col" className='p-3'>IMAGE</th>
            <th scope="col" className='p-3'>SLIDE TEXT</th>
            <th scope="col" className='p-3'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            apiSlidesInfo.map(slide => {
              return (
                <tr className="p-3" key={slide.url}>
                  <td scope="row w-25"><img src={slide.url} alt={slide.text} style={{ width: '100px', height: '50px' }} /></td>
                  <td>{slide.text}</td>
                  <td className='fw-bold d-flex gap-2 justify-content-center'>
                    
                    <a href="#" className='p-2 rounded-2 fd-bg-primary' onClick={(e) => parseSlide(slide)} title='View Slide'><i className="bi bi-eye"></i></a>
                    <a href="#" className='p-2 rounded-2 bg-secondary' onClick={(e) => parseSlide(slide)} title='Edit'><i className="bi bi-pen"></i></a>
                    <a href="#" className='p-2 rounded-2 bg-danger' title='Delete'><i className="bi bi-trash"></i></a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

const SlidesMain = () => {

  const [page, setPage] = useState('list');
  const [currentSlide, setCurrentSlide] = useState(null);

  const changeToList = () => { setPage('add'); setCurrentSlide(null) }
  const changeToAdd = () => { setPage('list'); }

  return (
    <div className='text-black'>
      <h4 className="fw-bold">Slideshow</h4>
      <div className="add-product my-3 d-flex justify-content-end">
        {
          page === 'list' ?
            <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToList}>ADD SLIDE</a> :
            <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3" onClick={changeToAdd}>SLIDES LIST</a>
        }
      </div>
      <div className="subPartMain">
        {page === 'list' ? <ListOfProducts setSlide={setCurrentSlide} setPage={setPage}/> : <AddOrEditSlide slide={currentSlide} />}
      </div>
    </div>
  )
}

export default SlidesMain