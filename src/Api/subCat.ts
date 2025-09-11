export default async function subCat (id : string)  {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`)
    const data  = await res.json();
    console.log(data);

    return data;
}