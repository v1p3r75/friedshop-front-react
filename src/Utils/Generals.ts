import React from 'react'
import { useLocation } from 'react-router-dom'
import { ProductType } from '../components/ProductCart';

const active = "d-block p-3 fd-nav-active";
const inactive = "d-block p-3 text-black";

const cartKeyName = 'fd_shoppingcart';
const wishlistKeyName = 'fd_wishlist';

type ToggleLink = { 
    path: string,
    activeClass : string,
    inactiveClass : string,
}


const toggleLinkClass = (path : string, activeClass : string = active, inactiveClass : string = inactive) => {

    const currentLink = useLocation().pathname;

    return currentLink === path ? activeClass : inactiveClass

}


const getItem = (keymane : string) => {

    return localStorage.getItem(keymane)
}


const setItem = (keyname : string, value : string | Object) => {

    return localStorage.setItem(keyname, JSON.stringify(value));

}

const removeItem = (keyname : string) => {
    
    return localStorage.removeItem(keyname);

}

const productIsExist = (keyname : string, stack : string) => {

    let localStore : string | ProductType[] = getItem(stack)!;

    if (!localStore) {
        return [];
        
    }

    localStore = JSON.parse(localStore);

    return typeof localStore === 'object'  ? localStore.filter(item => item.name === keyname) : [];
    
}

const deleteProduct = (key : ProductType, stack : string) => {

    let localStore : string | ProductType[] = getItem(stack)!;

    localStore = JSON.parse(localStore);

    if(localStore instanceof Object && localStore.find(item => item.name === key.name)) {

        let newStore = localStore.filter(item => item.name != key.name);
        setItem(stack, newStore);
        
        return newStore;
    }

    return [];


}

const setQuantity = (product : ProductType, stack : string, quantity: number) => {

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

    let localStore : string |  ProductType[] = getItem(cartKeyName)!;

    localStore = JSON.parse(localStore);

    let total = 0;

    if (localStore instanceof Object) {
        total = localStore.reduce((a, b) => 
            a + (b.price * (b.quantity || 1))
        , 0);
    }

    return total;

}

export const getNbTotal = (stack : string) => {

    // let localStore : string |  ProductType[] = getItem(stack)!;

    // localStore = localStore || JSON.parse();

    // return localStore ? localStore.length : 0;
    return 3;
}


export {toggleLinkClass, getItem, setItem, removeItem, productIsExist, deleteProduct, cartKeyName, wishlistKeyName, setQuantity}