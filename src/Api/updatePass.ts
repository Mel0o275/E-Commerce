'use server'
import getMyToken from "@/utilities/getMyToken";

export default async function updatePass(currentPassword : string, newPassword : string, rePassword : string) {
    const token = await getMyToken();

    if(!token) {
        return null;
    }
    
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword", {
        method: "PUT",
        headers: {
            token: token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            currentPassword: currentPassword,
            password: newPassword,
            rePassword: rePassword,
        }),
    });
    const data  = await res.json();
    console.log(data);

    return data;
}