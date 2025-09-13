import product from "@/Api/product.api"
import { productType } from "@/Types/product.type";
import Details from "@/app/_components/Details/Details";
import SingleProduct from "@/app/_components/singleProduct/SingleProduct";
import relatedProducts from "@/productCatActions/relatedProducts";
import React from "react"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product - Meloshop",
  description: "Explore Product",
};
export default async function Product({ params } : {params : Promise<{id : string}>}) {
  const {id} = await params;
  const data = await product(id);

    if(!data) {
        return <div>Product not found</div>
    }

    console.log(data.category._id);
    
    const related = await relatedProducts(data.category._id);
    console.log(related);
    

    return <>
        <Details data={data}/>
        
        <div className="container w-[80%] mx-auto flex flex-wrap mt-3">
      {related.data.map((product: productType) => (
        <SingleProduct product={product} key={product._id} />
      ))}
    </div>

        </>
}
