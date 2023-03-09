import React, { useEffect } from 'react'


const Reviews = ({rating} : {rating : number}) => {

    let content = document.createElement('div');
    const star = document.createElement('i');
    star.classList.add('bi', 'bi-star-fill');

    for (let i = 0; i < 5; i++) {
        content.appendChild(star);
    }


    return (
        <div className="products-reviews d-flex gap-2 text-warning">
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
        </div>
    )

}

export default Reviews