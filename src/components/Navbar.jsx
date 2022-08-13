import React from 'react';
import airbnb from "../assets/airbnb-logo.png"

export default function Navbar(){
    return(
        <div className='navbar' >
           <img src={airbnb} className="airbnb-logo" alt="" />
        </div>
    )
}