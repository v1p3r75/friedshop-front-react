import React, { InputHTMLAttributes, useRef, useState } from "react"


const AdminDetails = () => {

    const [formState, setFormState] = useState('disabled');


    const activeForm = () => {
        const inputs = document.querySelectorAll<HTMLInputElement>('.admin-profile input');
        inputs.forEach((input) => input.disabled = false);
        setFormState('save');

    }


    return (
        <form action="/" method="post" className="admin-profile p-3 mb-5">
            <div className='d-flex gap-2'>
                <label className='w-50'>
                    <span>First Name</span>
                    <input type="text" name="firstname" className="form-control w-100 rounded-2 p-2" value='ELFRIED' disabled />
                </label>
                <label className='w-50'>
                    <span>Last Name</span>
                    <input type="text" name="lastname" className="form-control w-100 rounded-2 p-2" value='KIDJE' disabled />
                </label>
            </div>
            <div className='d-flex gap-2 my-3'>
                <label className='w-100'>
                    <span>Email</span>
                    <input type="email" name="email" className="form-control w-100 rounded-2 p-2" value='elfriedv16@gmail.com' disabled />
                </label>
                <label className='w-100'>
                    <span>Phone</span>
                    <input type="text" name="firstname" className="form-control w-100 rounded-2 p-2" value='BP 05 Cotonou' disabled />
                </label>
            </div>
            <div className='my-4'>
                <label className='w-100'>
                    <span>Password</span>
                    <input type="password" name="password" className="form-control w-100 rounded-2 p-2" placeholder='********' disabled />
                </label>
            </div>
            <div>{formState === 'disabled' ?
                <a href="#" className="fd-btn w-25 text-center rounded-2" onClick={activeForm}>EDIT PROFILE</a>
                :
                <button className="fd-btn w-25 text-center rounded-2 border-0" type="submit">SAVE NOW</button>
            }
            </div>
        </form>
    )
}

const AdminList = () => {

    let count = 0;

    return (
        <div className="table-responsive mt-4">
            <table className="table table-default text-center table-bordered">
                <thead>
                    <tr className='fd-bg-primary text-white'>
                        <th scope="col" className='p-3'>N°</th>
                        <th scope="col" className='p-3'>LASTNAME</th>
                        <th scope="col" className='p-3'>FIRSTNAME</th>
                        <th scope="col" className='p-3'>EMAIL</th>
                        <th scope="col" className='p-3'>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="p-3">
                        <td scope="row w-25">{++count}</td>
                        <td className='fw-bold'>KIDJE</td>
                        <td className='opacity-75'>Fortunatus</td>
                        <td className='opacity-75'>elfriedv16@gmail.com</td>
                        <td className='opacity-75'>96457545</td>
                    </tr>
                    <tr className="p-3">
                        <td scope="row w-25">{++count}</td>
                        <td className='fw-bold'>ALASSANE</td>
                        <td className='opacity-75'>Kabirou</td>
                        <td className='opacity-75'>kabirou2001@gmail.com</td>
                        <td className='opacity-75'>51541210</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const AdminAccount = () => {

    return (
        <div className='text-black'>
            <h4 className="fw-bold">Profile</h4>
            <div className="add-product my-3 d-flex justify-content-end">
                <a href="#" className="fd-btn bg-secondary w-25 text-center rounded-3">ADD ACCOUNT</a>
            </div>
            <div className="subPartMain">
                <AdminDetails />
                <hr />
                <h4 className="mt-5">List Of All Admins</h4>
                <AdminList />
            </div>
        </div>
    )
}

export default AdminAccount