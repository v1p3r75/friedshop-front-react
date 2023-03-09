import React, { useEffect } from 'react'


const Reviews = ({rating} : {rating : number}) => {

    let content = document.createElement('div');
    const star = document.createElement('i');
    star.classList.add('bi', 'bi-star');

    for (let i = 0; i < 5; i++) {
        content.appendChild(star);
    }


    return (
        <div className="products-reviews d-flex gap-2">
            <i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i>
        </div>
    )

}

export default Reviews