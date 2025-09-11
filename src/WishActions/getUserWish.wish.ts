import getMyToken from "@/utilities/getMyToken";

export default async function getUserWish () {
    const token = await getMyToken();

    if(!token) {
        throw new Error("No token found");
    }

    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',{
        method : "GET",
        headers : {
            token,
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    return data;
}