import React from 'react'
import { useLocation } from 'react-router-dom'

const active = "d-block p-3 fd-nav-active";
const inactive = "d-block p-3 text-black";

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

    if (value instanceof Object) {
        return localStorage.setItem(keyname, JSON.stringify(value));
    }

    return localStorage.setItem(keyname, value)

}

const removeItem = (keyname : string) => {
    
    return localStorage.removeItem(keyname);

}

export {toggleLinkClass, getItem, setItem, removeItem}