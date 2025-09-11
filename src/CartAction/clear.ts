import getMyToken from "@/utilities/getMyToken";

export default async function clearCart () {
    const token = await getMyToken();

    if(!token) {
        throw new Error("User not authenticated");
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method : "DELETE",
        headers : {
            token        },
    })

    const data = await res.json();
    return data;
} 