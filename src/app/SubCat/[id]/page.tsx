import subCat from '@/Api/subCat';
import SubDetails from '@/app/_components/SubDetails/SubDetails';
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub-Category - Meloshop",
  description: "Explore Sub-Category",
};
export default async function SubCat({ params } : {params : Promise<{id : string}>}) {

    const {id} = await params;
    const {data} = await subCat(id);
    return <>
        <SubDetails data={data} />
    </>
    
}
