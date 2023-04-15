import { TypedUseMutationResult } from "@reduxjs/toolkit/dist/query/react";
import { UseMutationStateResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export const HandleResult = ({result} : {result : any}) => {
    
    let content : React.ReactNode = null;

    if (result.isError && result.error?.data) {
        content = <div>
            <h5 className="text-danger">{result.error.data?.message}</h5>
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

    return content;
}