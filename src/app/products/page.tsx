import React from 'react'

import AllProducts from '../_components/AllProducts/AllProducts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Meloshop",
  description: "Explore Top Products",
};
export default async function Products() {


  return (
    <>
        <AllProducts />
    </>
  );

}
