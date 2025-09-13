'use server'
import getMyToken from "@/utilities/getMyToken";

export default async function updateInfo(name : string, email : string, phone : string) {
    const token = await getMyToken();

    if(!token) {
        return null;
    }
    
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/users/updateMe/", {
        method: "PUT",
        headers: {
            token: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            phone
        }),
    });
    const data  = await res.json();
    console.log(data);

    return data;
}