'use server'
import getMyToken from "@/utilities/getMyToken";

export default async function addAddress(home: string, details: string, phone: string, city: string) {
    const token = await getMyToken();

    if (!token) {
        return null;
    }

    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                token: token,
            },
            body: JSON.stringify({
                name: home,
                details: details,
                phone: phone,
                city: city
            }),
        });

        const data = await res.json();
        console.log("Response:", data);
        return data;

    } catch (error) {
        console.error("Error adding address:", error);
    }

}