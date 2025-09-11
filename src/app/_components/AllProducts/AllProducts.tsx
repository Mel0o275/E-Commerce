import allProducts from '@/Api/allproducts.api';
import SingleProduct from '../singleProduct/SingleProduct';
import React from 'react'
import { productType } from '@/Types/product.type';

export default async function AllProducts() {

  const data = await allProducts();

  return <>
    <div className="container w-[80%] mx-auto flex flex-wrap mt-3">
      {data.map((product: productType) => (
        <SingleProduct product={product} key={product._id} />
      ))}
    </div>
  </>
}
