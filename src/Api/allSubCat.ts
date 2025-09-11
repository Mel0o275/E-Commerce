export default async function allSubCat ()  {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/subcategories');
    const { data } = await res.json();
    console.log(data);

    return data;
}