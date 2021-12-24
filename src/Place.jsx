import React from "react";

export default function Place(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} />
            </div>
            
            <p className="card-name">{props.name}</p>
            <p className="card-info">{props.info}</p>
            <p className="card-price">${props.price}</p>
        </div>
    )
}