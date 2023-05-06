import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux-hooks';
import RoutePaths from '../config';

export const BASE_URL = 'http://127.0.0.1:8000/api'; // BASE URL FOR API FETCHING

export const BASE_STORAGE_URL = 'http://127.0.0.1:8000/storage/'; // BASE URL FOR FETCHING MEDIA (image, video, etc.)

const active = "d-block p-3 fd-nav-active"; // WHERE MENU IS ACTIVE CLASS 

const inactive = "d-block p-3 text-black"; // WHERE MENU IS NOT ACTIVE CLASS

export const cartKeyName = 'fd_shoppingcart'; // CART KEY NAME FOR LOCAL STORAGE

export const wishlistKeyName = 'fd_wishlist'; // WISHLIST KEY NAME FOR LOCAL STORAGE

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