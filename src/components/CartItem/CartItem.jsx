import React from "react";
import "./style.css";

export default function CartItem(props){
    const operateCart = (operation) => {
        const newProducts = [...props.products];
        newProducts.map(product => {
            if (product["Id"] === props.part["Id"]){
                switch(operation){
                    case "increase":
                        product["Ordered"] += 1;
                        break;
                    case "decrease":
                        product["Ordered"] -= 1;
                        break;
                    case "erase":
                        product["Ordered"] = 0;
                        break;
                    default:
                        console.log("Undefined operation");
                }
            }
        })
        props.setProducts([...newProducts]);
    }

    return (
        <div className="cart-item">
            <div className="cart-i-image-container">
                <img className="cart-i-image" src={props.part["Image"]} />
            </div>
            <div className="cart-i-name-group">
                <h2 className="cart-i-name">{props.part["Name"]}</h2>
                <h3 className="cart-i-id">{`Id: ${props.part["Id"]}`}</h3>
            </div>
            <h2>{props.part["Category"]}</h2>
            <div className="cart-i-quantity-group">
                <button onClick={() => operateCart("increase")}>+</button>
                <span>{props.part["Ordered"]}</span>
                <button onClick={() => operateCart("decrease")}>-</button>
            </div>
            <h2>{`K$ ${props.part["Ordered"]*props.part["Cost"]}`}</h2>
            <button onClick={() => operateCart("erase")}>X</button>
        </div>
    )
}