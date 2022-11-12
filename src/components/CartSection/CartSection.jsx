import React from "react";
import CartItem from "../CartItem/CartItem";

export default function CartSection(props){
    const subtotal = props.products
        .filter(part => part["Ordered"] > 0)
        .reduce((previous, current) => 
            previous + current["Cost"]*current["Ordered"], 0)

    return (
        <section>
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
        </section>
    )
}