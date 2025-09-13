import brand from '@/Api/brand';
import BrandDetails from '@/app/_components/BrandDetails/BrandDetails';
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands - Meloshop",
  description: "Explore Brand",
};
export default async function Brand({ params } : {params : Promise<{id : string}>}) {
  const {id} = await params;
  const {data} = await brand(id);
  
  return <BrandDetails data={data} />
  
}
