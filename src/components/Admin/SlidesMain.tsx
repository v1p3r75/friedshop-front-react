import React, { SyntheticEvent, useState, useRef } from 'react'
import { Slide, apiSlidesInfo } from '../../views/VirtualData'
import { useCreateSlideMutation, useDeleteSlideMutation, useGetAllSlidesQuery, useUpdateSlideMutation } from '../../store/apiquery/slideApiSlice';
import { HandleResult } from '../HandleResult';
import Swal from 'sweetalert2';
import Spinner from '../Spinner';
import { link } from '../../Utils/Generals';

let imageIsChanged = false;

const UpdateSlide = ({ slide }: { slide: Slide }) => {

  const [updateData, setUpdateData] = useState(slide);
  const [image, setImage] = useState<Blob>()
  const [updateSlide, result] = useUpdateSlideMutation();
  const imageTag = useRef<HTMLImageElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {

    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    form.append('_method', 'patch');
    form.append('imageEdited', imageIsChanged.toString());
    updateSlide(form);
    imageIsChanged = false;

  }

  const handleUpdateValue = (e: SyntheticEvent) => {

    const target = e.target as HTMLInputElement;

    if (target.name === 'image' && imageTag.current && target.files) {

      imageIsChanged = true;
      imageTag.current.src = URL.createObjectURL(target.files[0]);
    }
    setUpdateData(prevState => ({ ...prevState, [target.name]: target.value }));

  }

  return (
    <form action="" method="post" className="checkout-service p-3" onSubmit={handleSubmit}>
      	<input type="hidden" name="id" value={slide.id}/>
      <div className="w-100 mx-auto p-3 border border-1 rounded-5 fd-hover-border-primary" style={{ height: '450px' }}>
        <img src={link(slide.image)} alt={slide.text} className='w-100 h-100' ref={imageTag}/>
      </div>
      <div className='mt-4'>
        <label className='w-100'>
          <span>Image</span>
          <input type="file" name="image" className="form-control w-100 rounded-0 p-2" onChange={handleUpdateValue} accept='image/*' />
        </label>
        <label className='w-100 mt-4'>
          <span>Text</span>
          <input type="text" name="text" className="form-control w-100 rounded-0 p-2" value={updateData.text} onChange={handleUpdateValue} />
        </label>
      </div>
      <div className="mt-3">
					<HandleResult result={result} />
			</div>
      <div className='mt-3'>{result.isLoading ?
					<button className="fd-btn w-25 text-center border-0"><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
						Loading...</button> :
					<button className="fd-btn w-25 text-center border-0" type="submit">UPDATE SLIDE</button>
				}</div>    </form>
  )
}


const AddOrEditSlide = ({ slide }: { slide: null | Slide }) => {


  const [image, setImage] = useState<Blob | null>(null);
  const [data, setData] = useState({});


  const [createSlide, result] = useCreateSlideMutation();


  const handleSubmit = (e: SyntheticEvent) => {

    e.preventDefault();

    const form = new FormData(e.target as HTMLFormElement);
    createSlide(form);

  }

  const handleValue = (e: SyntheticEvent) => {

    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setData(values => ({ ...values, [target.name]: target.value }));

  }


  if (!slide) {

    return (
      <form action="" method="post" className="checkout-service p-3" onSubmit={handleSubmit}>
        {image &&
          <div className="w-100 mx-auto p-3 border border-1 rounded-5 fd-hover-border-primary mb-4" style={{ height: '250px' }}>
            <img src={URL.createObjectURL(image)} alt="Product Image Preview" className='w-100 h-100' />
          </div>
        }
        <div className='mt-4'>
          <label className='w-100'>
            <span>Image</span>
            <input type="file" name="image" className="form-control w-100 rounded-0 p-2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files && e.target.files[0];
              setImage(file)
            }} accept='image/*' />
          </label>
          <label className='w-100 mt-4'>
            <span>Text</span>
            <input type="text" name="text" className="form-control w-100 rounded-0 p-2" placeholder='Slide Text' onChange={handleValue} />
          </label>
        </div>
        <div>
          <HandleResult result={result} />
        </div>
        <div className='mt-3'>{result.isLoading ?
          <button className="fd-btn w-25 text-center border-0"><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...</button> :
          <button className="fd-btn w-25 text-center border-0">SAVE NOW</button>
        }</div>
      </form>
    )
  }

  return <UpdateSlide slide={slide} />

}

const ListOfSlides = ({ setSlide, setPage }: { setSlide: Function, setPage: Function }) => {

  const parseSlide = (slide: Slide) => {
    setSlide(slide);
    setPage('add');
  }

  const { isLoading, data: slideList, isSuccess, isError } = useGetAllSlidesQuery('api/slides');
  const [deleteResult, deletedResult] = useDeleteSlideMutation();

  const deleteItem = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure to delete this slide ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((r) => {
      if (r.isConfirmed) {
        deleteResult(id);
      }
    });
  }

  let content: React.ReactNode;

  content = isLoading || isError
    ? null
    : isSuccess
      ? slideList['data'].map((slide: Slide) => {

        return (
          <tr className="p-3" key={slide.image}>
            <td scope="row w-25"><img src={link(slide.image)} alt={slide.text} style={{ width: '100px', height: '50px' }} /></td>
            <td>{slide.text}</td>
            <td className='fw-bold d-flex gap-2 justify-content-center'>

              <a href="#" className='p-2 rounded-2 fd-bg-primary' onClick={(e) => parseSlide(slide)} title='View Slide'><i className="bi bi-eye"></i></a>
              <a href="#" className='p-2 rounded-2 bg-secondary' onClick={(e) => parseSlide(slide)} title='Edit'><i className="bi bi-pen"></i></a>
              <a href="#" className='p-2 rounded-2 bg-danger' title='Delete' onClick={(e) => {
                e.preventDefault();
                deleteItem(slide.id)
              }}><i className="bi bi-trash"></i></a>
            </td>
          </tr>
        )
      })
      : null;



  return (
    !isLoading ?
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
            {content}
          </tbody>
        </table>
      </div>
      :
      <Spinner />
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
        {page === 'list' ? <ListOfSlides setSlide={setCurrentSlide} setPage={setPage} /> : <AddOrEditSlide slide={currentSlide} />}
      </div>
    </div>
  )
}

export default SlidesMain