import React from "react";

export default function Place(props){

    const [readMore, setReadMore] = React.useState(false)
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} />
            </div>
            
            <p className="card-name">{props.name}</p>
            <p className="card-info">{readMore?props.info:props.info.substring(0,274)}
                <button className="readmore-btn" onClick={()=>setReadMore(prevData=>!prevData)}>..Read More</button>
            </p>
            <p className="card-price">${props.price}</p>
        </div>
    )
}