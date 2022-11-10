import React from "react";
import "./style.css";

export default function SearchSection(props){
    const handleChangeName = (event) => {
        props.setProductName(event.target.value);
    }

    const handleChangeMaximum = (event) => {
        props.setMaximumPrice(event.target.value);
    }

    const handleChangeMinimum = (event) => {
        props.setMinimumPrice(event.target.value);
    }
    
    return (
        <section id="search-section">
            <h2 id="search-section-title">Search</h2>
            <label className="search-label" htmlFor="name-search">Name:</label>
            <div className="input-div">
                <img className="icon" src="/search.svg" />
                <input className="input" type="text" id="name-search" value={props.productName} onChange={handleChangeName}/>
            </div>
            <label className="search-label" htmlFor="max-price-search">Maximum Price (K$):</label>
            <div className="input-div">
                <img className="icon" src="/top.svg" />
                <input className="input" type="number" id="max-price-search" value={props.maximumPrice} onChange={handleChangeMaximum}/>
            </div>  
            <label className="search-label" htmlFor="min-price-search">Minimum Price (K$):</label>
            <div className="input-div">
                <img className="icon" src="/bottom.svg" />
                <input className="input" type="number" id="min-price-search" value={props.minimumPrice} onChange={handleChangeMinimum}/>
            </div>                     
        </section>
    )
}