import React from "react";

function BeerCard (props){
    return (
        <div>
            <h1>{props.name}</h1>
            <img src = {props.image_url}/>
        </div>
    )
}

export default BeerCard;