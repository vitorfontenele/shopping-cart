import React from "react";
import { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import "./style.css";

export default function CartSection(props){
    const subtotal = props.products
        .filter(part => part["Ordered"] > 0)
        .reduce((previous, current) => 
            previous + current["Cost"]*current["Ordered"], 0)


    return (
        <section id="cart-section" className={props.cartVisibility? "see" : ""}>
            <div id="first-cart-col">
                <h1>V</h1>
            </div>
            <div id="second-cart-col">
                <h1>Cart</h1>
                {props.products
                    .filter(part => part["Ordered"] > 0)
                    .map(part =>{
                        return <CartItem 
                                    part={part}
                                    products={props.products}
                                    setProducts={props.setProducts}    
                                />
                    })
                }
                <h1>{subtotal > 0 ?`Subtotal: K$ ${subtotal}` : ""}</h1>
            </div>
        </section>
    )
}