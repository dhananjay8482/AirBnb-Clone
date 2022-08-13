import React from "react";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import star from "../assets/start.png"

export default function Card(){
    return(
        <div className="card">
            <img src={pic1} alt="" className="card--image"  />
            <div className="card--stats">
                <img src={star} alt="" className="card--star" />
                <span>5.0</span>
                <span className="grey">(6) •</span>
                <span className="grey">USA</span>
            </div>
            <p>Life with Katie Zefres</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}