export default async function category (id : string)  {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    const { data } = await res.json();
    console.log(data);

    return data;
}