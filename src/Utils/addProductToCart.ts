import { ProductType } from "../components/ProductCart";
import { getItem, setItem } from "./Generals";

const addProductToCart = (product : ProductType, keyName = 'wishlist') => {


    const getProducts = getItem(keyName);

    if (getProducts) {

      const oldProducts = JSON.parse(getProducts);
      const products : ProductType[] = [...oldProducts, product];

      return setItem(keyName, products)

    }

    return setItem(keyName, [{...product}]);

  }

export default addProductToCart;