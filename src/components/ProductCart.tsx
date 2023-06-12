import Reviews from './Reviews';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import AddToWishlist from './AddToWishlist';
import { link } from '../Utils/Generals';

export type ProductType = {
    id : number,
    img: string,
    reviews: number,
    name: string,
    price: number,
    old_price: number,
    reduction?: string,
    type?: string,
    desc?: string,
    quantity?: number,
    total_quantity: number,
    categorie_id? : number,
};

const ProductCart = (props: ProductType) => {


    return (
        props.type === 'list' ?

            <div className="position-relative bg-white mt-4 border-1 border fd-hover-border-primary product-cart" style={{ minHeight: "250px" }}>
                {!props.reduction ?
                    <a className="position-absolute top-0 start-0 fd-btn p-custorm z-1">SALE</a>
                    :
                    <a className="position-absolute top-0 start-0 fd-btn-red z-1"> {props.reduction} %</a>
                }
                <div className="d-flex gap-3">
                    <div className="position-relative h-100 col-3 product-img">
                        <img src={link(props.img)} alt={props.name} className="w-100 h-50" />
                    </div>
                    <div className="w-75 pt-3">
                        <div>
                            <Link to={"/product/" + props.id} className="product-name my-2 fw-bold text-dark">{props.name}</Link>
                        </div>
                        <div className='d-flex my-2'>
                            <Reviews rating={props.reviews} />
                        </div>
                        <div className="d-flex">
                            <h5 className="fd-color-primary">${props.price}</h5>
                            <h6 className="align-self-end" style={{ textDecoration: "line-through" }}>${props.old_price}</h6>
                        </div>
                        <p className="desc fw-bold opacity-50">{props.desc}</p>
                        <div className="d-flex gap-2">
                            <AddToCart product={props}/>
                            <div><Link to={"/product/" + props.id} className="fd-btn rounded-3"><i className="bi bi-eye"></i></Link></div>
                            <div><AddToWishlist product={props} classSup='rounded-3'/></div>
                        </div>
                    </div>
                </div>
            </div>

            :


            <div className="position-relative bg-white mt-4 border-1 border fd-hover-border-primary product-cart" style={{ height: "400px" }}>
                <div className="position-relative h-75 product-img">
                    <img src={link(props.img)} alt={props.name} className="w-100 h-100" />
                    <div className='show d-none position-absolute w-100 animate__animated animate__fadeIn' style={{ bottom: '10%' }}>
                        <AddToCart product={props} classSup='bg-white fd-color-primary fd-hover-bg-primary d-block w-75 mx-auto px-3 py-2'/>
                    </div>
                </div>
                {!props.reduction ? <a className="position-absolute top-0 start-0 fd-btn" style={{ padding: '5px 20px' }}>SALE</a> :
                    <a className="position-absolute top-0 start-0 fd-btn-red" style={{ padding: '5px 20px' }}> {props.reduction} </a>
                }
                <AddToWishlist product={props} classSup='position-absolute rounded-5' supStyle={{ padding: '5px 10px', top: '10%', right: '10%' }}/>
                <Link to={"/product/" + props.id} className="show position-absolute fd-btn rounded-5 d-none animate__animated animate__fadeInRight" style={{ padding: '5px 10px', top: '20%', right: '10%' }}> <i className="bi bi-eye"></i></Link>
                <div className='text-center'>
                    <Link to={"/product/" + props.id} className="product-name my-2 fw-bold text-dark">{props.name}</Link>
                </div>
                <div className='d-flex justify-content-center'>
                    <Reviews rating={props.reviews} />
                </div>
                <div className="d-flex justify-content-center">
                    <h5 className="fd-color-primary">${props.price}</h5>
                    <h6 className="align-self-end" style={{ textDecoration: "line-through" }}>${props.old_price}</h6>
                </div>
            </div>
    )

}



export default ProductCart