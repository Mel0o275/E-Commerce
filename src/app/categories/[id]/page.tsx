import category from '@/Api/category.api';
import subWithCat from '@/Api/subwithcat';
import { subCat } from '@/Types/sub.type';
import CatDetails from '@/app/_components/CatDetails/CatDetails';
import SingleSub from '@/app/_components/SingleSub/SingleSub';
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category - Meloshop",
  description: "Explore Category",
};
export default async function cat({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await category(id);
    const subdata = await subWithCat(id);
    console.log(subdata);

    return (
        <>
            <CatDetails data={data} />
            {subdata.length !== 0 &&<h1 className='font-bold text-blue-500 text-3xl text-center'>SubCategories</h1>}
        
            <div className="container w-[80%] mx-auto flex flex-wrap mt-12 mb-12">
                {subdata.map((sub : subCat) => (
                    <SingleSub sub={sub} key={sub._id} />
                ))}
            </div>
        </>
    );
}
