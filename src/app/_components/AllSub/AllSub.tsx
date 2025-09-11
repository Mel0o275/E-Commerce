import React from 'react'
import SingleSub from '../SingleSub/SingleSub';
import allSubCat from '@/Api/allSubCat';
import { subCat } from '@/Types/sub.type';

export default async function AllSub() {

  const data = await allSubCat();
    console.log(data);
    

    return <>
        <div className="container w-[80%] mx-auto flex flex-wrap mt-12 mb-2">
          {data.map((sub : subCat) => (
            <SingleSub sub={sub} key={sub._id} />
          ))}
        </div>
    </>
}
