import React from 'react'
import AllBrands from '../_components/AllBrands/AllBrands';
import allBrands from '@/Api/allbrands';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands - Meloshop",
  description: "Explore Top Brands",
};
export default async function Brands() {

  const data = await allBrands();  
  console.log(data);
  

  return (
    <>
        <AllBrands />
    </>
  );
}
