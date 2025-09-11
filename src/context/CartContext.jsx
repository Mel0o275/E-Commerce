'use client'
import { createContext, useEffect, useState } from "react";
import getUserCart from "@/CartAction/getUserCart.action";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {

    const [count, setcount] = useState("");
    let sum = 0;

    async function userCart() {
        try {
            let res = await getUserCart();
            console.log(res);
            if(res.status === 'success') {
                res.data.products.forEach((item) => {
                    sum += item.count;
                })
                console.log(sum);
                setcount(sum);
            }
        }
        catch (err) {
            console.log("not Logged in");
        }
    }

    useEffect(() => {
        userCart();
    })

    return (
        <CartContext.Provider value={{count, setcount}}>
            {children}
        </CartContext.Provider>
    )
}