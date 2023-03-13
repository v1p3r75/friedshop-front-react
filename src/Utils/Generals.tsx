import React from 'react'
import { useLocation } from 'react-router-dom'

const active = "d-block p-3 fd-nav-active";
const inactive = "d-block p-3 text-black";

type ToggleLink = { 
    path: string,
    activeClass : string,
    inactiveClass : string,
}

export const toggleLinkClass = (path : string, activeClass : string = active, inactiveClass : string = inactive) => {

    const currentLink = useLocation().pathname;

    return currentLink === path ? activeClass : inactiveClass

}