'use server'

import getMyToken from "@/utilities/getMyToken"

export default async function updateProduct(id : string, count :string) {
    const token = await getMyToken();

    if(!token) {
        throw new Error("User not authenticated");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
        method : "PUT",
        headers : {
            token,
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            count
        })
    })

    const data = await res.json();
    return data;
}