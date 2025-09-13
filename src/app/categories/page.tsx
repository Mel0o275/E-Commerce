import React from 'react'
import AllCategories from '../_components/AllCategories/AllCategories';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories - Meloshop",
  description: "Explore Top Categories",
};
export default async function Categories() {
  
  return (
    <>
        <AllCategories />
    </>
  );
}
