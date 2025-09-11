'use server'
import getMyToken from "@/utilities/getMyToken";

export default async function removeWish(id: string) {
    const token = await getMyToken();
    console.log(token);
    
    if(!token) {
        throw new Error("User not authenticated");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        method : "DELETE",
        headers : {
            token,
            "Content-Type" : "application/json",
        }
    })

    const data = await res.json();
    return data;
}