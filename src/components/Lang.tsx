import React from 'react'

const Lang = () => {
    return (
        <div className='header-lang ms-5'>
            <nav className="dropdown">
                <a href="#" className="dropdown-toggle" data-bs-toggle='dropdown' data-bs-auto-close='outside'>English</a>
                <div className="dropdown-menu rounded-0 text-start animate__animated animate__fadeIn">
                    <ul>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">French</a></li>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Arabic</a></li>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Spanish</a></li>
                        <li><a href="#" className="dropdown-item fd-hover-color-primary text-black">Deustch</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Lang