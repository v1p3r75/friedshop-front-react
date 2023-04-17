import { TypedUseMutationResult } from "@reduxjs/toolkit/dist/query/react";
import { UseMutationStateResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HandleResult = ({result} : {result : any}) => {

    useEffect(() => {
        result.isError && toast.error((result.error as any).data?.message);
        result.isSuccess && toast.success(result.data?.message);
    }, [result]);
    
    let content : React.ReactNode = null;

    if (result.isError && result.error?.data) {
        content = <div>
            {result.error.data?.errors.map((err : string) => (
                <div key={err} className='fw-bold'>
                    <i className='bi bi-x text-danger'>{err}</i>
                </div>
            ))}
        </div>
        
    } else if (result.isSuccess && result.data?.message) {

        content = <div className='w-100 p-2 bg-success text-white fw-bold rounded-2 '>
                <span>{result.data.message}</span>
            </div>
    }

    return <><ToastContainer />{content}</>;
}