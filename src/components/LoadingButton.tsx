import React, { PropsWithChildren } from 'react'

const LoadingButton = ({loadingState, children} : PropsWithChildren<{loadingState : boolean}>) => {

  return (
    <>
        { loadingState ?
            <button className="fd-btn w-100 text-center border-0">
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Loading...
            </button> :
            children
        }
    </>
  )
}

export default LoadingButton