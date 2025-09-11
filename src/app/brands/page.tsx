import React from 'react'
import AllBrands from '../_components/AllBrands/AllBrands';
import allBrands from '@/Api/allbrands';

export default async function Brands() {

  const data = await allBrands();  
  console.log(data);
  

  return (
    <>
        <AllBrands />
    </>
  );
}
