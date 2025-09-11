export default async function getUserOrders(userId: string) {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`);
    const result = await res.json();
    console.log(result);
    return result;
}
