import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductType } from '../components/ProductCart';
import { useAppSelector } from '../hooks/redux-hooks';

const active = "d-block p-3 fd-nav-active";
const inactive = "d-block p-3 text-black";

export const cartKeyName = 'fd_shoppingcart';
export const wishlistKeyName = 'fd_wishlist';

type ToggleLink = { 
    path: string,
    activeClass : string,
    inactiveClass : string,
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

export const setQuantity = (product : ProductType, stack : string, quantity: number) => {

    let localStore : string | ProductType[] = getItem(stack)!;

    localStore = JSON.parse(localStore);


    if(localStore instanceof Object) {

        const localProduct = localStore.find(item => item.name === product.name);

        if (localProduct) {

            localStore.map(item => {
                item.quantity = localProduct.name === item.name ? quantity : void 0;
            })
            setItem(cartKeyName, localStore);
        }

    }

    return [];

}

export const getTotal = () => {

    const state = useAppSelector((state) => state.productCart);

    const total = state.reduce((a, b) => a + (b.price * (b.quantity || 1)), 0);

    return total;

}