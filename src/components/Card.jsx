import React from "react";
import pic2 from "../assets/pic2.png"
import star from "../assets/start.png"

export default function Card(props){
    // CODE FOR SOLD OUT OR ONLINE BADGE
    let badgeText
    if(props.openSpots===0){
        badgeText = "SOLD OUT"
    }else if(props.location==="Online"){
        badgeText = "Online"
    }


    return(
        <div className="card">
            { badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="" className="card--image"  />
            <div className="card--stats">
                <img src={star} alt="" className="card--star" />
                <span> {props.stats.rating} </span>
                <span className="grey">({props.stats.reviewCount}) •</span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}