'use server'

import { CheckoutType } from "@/schema/checkout";
import getMyToken from "@/utilities/getMyToken"

export default async function checkoutOnline(id : string, url : string, values : CheckoutType) {
    const token = await getMyToken();
    console.log(token);
    

    if(!token) {
        return null;
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=${url}`,{
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
            token : token
        },
        body : JSON.stringify(
            {
                shippingAddress : values
            }
        )
    })
    const data = await res.json();
    return data;
} 