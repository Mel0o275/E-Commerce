"use server"
import getMyToken from "@/utilities/getMyToken"

export default async function addProduct(id : string) {
    try {
        const token = await getMyToken();

    if(!token) {
        throw new Error("You must be logged in to add to cart");
    }

    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
        method: "POST",
        headers : {
            token,
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            productId : id
        })
    });
    
    const data = await res.json();
    return data;
    }
    catch(err) {
        return err;
    }
}