import Reviews from './Reviews';
import { Link } from 'react-router-dom';
import { ProductType } from './ProductCart';
import { link } from '../Utils/Generals';

const ProductSort = (props : ProductType) => {
    

    return (
        <div className="d-flex w-100 gap-3 h-25 mb-3 bg-white">
            <div className="w-25 border-1 border fd-hover-border-primary">
                <Link to={"/product/" + props.id}><img src={link(props.img)} alt={props.name} className="w-100 h-100"/></Link>
            </div>
            <div className="w-75">
                <Link to={"/product/" + props.id} className="product-name my-2 fw-bold text-dark">{props.name}</Link>
                <Reviews rating={props.reviews}/>
                <div className="d-flex">
                    <span className="fd-color-primary fw-bold me-1">${props.price}</span>
                    <span className="align-self-end" style={{textDecoration : "line-through"}}>${props.old_price}</span>
                </div>
            </div>
        </div>  
    )

}



export default ProductSort