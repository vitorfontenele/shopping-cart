import React from "react";
import "./style.css";

export default function Card(props){
    return (
        <div className="card">
            <div className="card-image-container">
                <div className="card-image-text">{props.part.Category}</div>
                <img className="card-image" src={props.part.Image} alt="" />
            </div>
            <div className="card-product-sizes">{props.part["Radial size"].map(size => {
                return <div className="card-product-size">{size}</div>
            })}</div>
            <h2 className="card-title">{props.part.Name}</h2>
            <h3 className="card-product-cost">{`K$ ${props.part.Cost}`}</h3>
            <div className="product-general-data">
                {/* <h3>{props.part.Category}</h3> */}
                <h4>{`Mass: ${props.part["Mass(t)"]}t`}</h4>
                <h4>{`Max. Temp.: ${props.part["Max. Temp.(K)"]}K`}</h4>
                <h4>{`Tolerance: ${props.part["Tolerance(m/s)"]}m/s`}</h4>
            </div>
            <button className="card-button">Add to bag <i class="fa-solid fa-arrow-right"></i></button>
            <h5 className="card-disclaimer">Help the kerbal initiative!</h5>
        </div>
    )
}