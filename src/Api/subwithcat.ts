export default async function subWithCat (id : string)  {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
    const { data } = await res.json();
    console.log(data);

    return data;
}