'use server'
import getMyToken from "@/utilities/getMyToken";

export default async function getAddresses() {
  const token = await getMyToken();

    if (!token) {
        return null;
    }
    try {
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          token: token as string,
        },
      });

      const data = await res.json();
      console.log("Addresses:", data);
      return data
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  }