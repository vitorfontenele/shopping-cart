import React from "react";
import parts from "../../parts.json";
import Card from "../Card/Card";
import "./style.css";

export default function CardsSection(props){
    return (
        <section id="cards-section">
            {parts
                .filter(part => (part["Name"].toLowerCase())
                    .includes(props.productName.toLowerCase()))
                .filter(part => props.minimumPrice? part["Cost"] >= Number(props.minimumPrice) : true)
                .filter(part => props.maximumPrice? part["Cost"] <= Number(props.maximumPrice) : true)
                .map(part => {
                    return <Card part={part}/>
            })}
        </section>
    )
}