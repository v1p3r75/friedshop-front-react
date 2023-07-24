import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux-hooks';
import RoutePaths from '../config';
import { ProductType } from '../components/ProductCart';
import Swal from 'sweetalert2';
import { SyntheticEvent } from 'react';

// export const BASE_URL = 'http://friedshop-back-laravel.test/api/'; // BASE URL FOR API FETCHING
export const BASE_URL = 'https://friedshop.kabirou-alassane.com/api'; // BASE URL FOR API FETCHING

export const BASE_STORAGE_URL = 'https://friedshop.kabirou-alassane.com/storage/'; // BASE URL FOR FETCHING MEDIA (image, video, etc.)
// export const BASE_STORAGE_URL = 'http://friedshop-back-laravel.test/storage/'; // BASE URL FOR FETCHING MEDIA (image, video, etc.)

const active = "d-block p-3 fd-nav-active"; // WHERE MENU IS ACTIVE CLASS 

const inactive = "d-block p-3 text-black"; // WHERE MENU IS NOT ACTIVE CLASS

export const cartKeyName = 'fd_shoppingcart'; // CART KEY NAME FOR LOCAL STORAGE

export const wishlistKeyName = 'fd_wishlist'; // WISHLIST KEY NAME FOR LOCAL STORAGE

export type User = {

    id?: number,
    firstname?: string,
    lastname?: string,
    email?: string,
    phone?: string,
    address?: string,
    password?: string,
    password_confirmation?: string,
}

export const toggleLinkClass = (path : string, activeClass : string = active, inactiveClass : string = inactive) => {

    const currentLink = useLocation().pathname;

    return currentLink === path ? activeClass : inactiveClass

}


export const getItem = (keymane : string) => {

    return localStorage.getItem(keymane)
}


export const setItem = (keyname : string, value : string | Object) => {

    return localStorage.setItem(keyname, JSON.stringify(value));

}

export const removeItem = (keyname : string) => {
    
    return localStorage.removeItem(keyname);

}


export const getTotal = () => {

    const state = useAppSelector((state) => state.productCart);

    const total = state.reduce((a, b) => a + (b.price * (b.quantity || 1)), 0);

    return total;

}

export const link = (url : string) : string => BASE_STORAGE_URL + url;

export const checkLogin = () => {
    
    const isLogged = localStorage.getItem(RoutePaths.token);
    return !!isLogged;
}

type CheckOut = {product_id : number, quantity? : number};

export const buildCheckoutData = () => {
    
    const products = useAppSelector((state) => state.productCart);
    const user : User = useAppSelector((state) => state.user)

    let checkoutData : CheckOut[] = [];

    products.forEach((product : ProductType) => {
        checkoutData.push({
            product_id: product.id,
            quantity: product.quantity || 1,
        })
    })

    return {user_id: user.id, commands : checkoutData};
}
