import React from "react";
import parts from "../../parts.json";
import Card from "../Card/Card";
import "./style.css";

export default function CardsSection(props){
    const handleChangeOrder = (event) => {
        props.setOrder(event.target.value);
    }

    return (
        <section id="cards-section">
            <div id="select-container">
                <select id="order-select" value={props.order} onChange={handleChangeOrder}>
                    <option value="">-Ordem-</option>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </select>
            </div>
            <div id="cards-container">
                {parts
                    .filter(part => (part["Name"].toLowerCase())
                        .includes(props.productName.toLowerCase()))
                    .filter(part => props.minimumPrice? part["Cost"] >= Number(props.minimumPrice) : true)
                    .filter(part => props.maximumPrice? part["Cost"] <= Number(props.maximumPrice) : true)
                    .sort((a,b) => {
                        if (props.order === "Crescente"){
                            return a["Name"] < b["Name"] ? -1 : 1;
                        } else if (props.order === "Decrescente"){
                            return a["Name"] < b["Name"] ? 1 : -1;
                        }
                    })
                    .map(part => {
                        return <Card part={part}/>
                })}
            </div>
        </section>
    )
}