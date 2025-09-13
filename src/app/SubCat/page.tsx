import React from 'react'
import AllSub from '../_components/AllSub/AllSub'
import allSubCat from '@/Api/allSubCat';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub-Categories - Meloshop",
  description: "Explore Top Sub-Categories",
};
export default async function page() {

  let data = await allSubCat();

    return <>
        <AllSub />

    </>
}
