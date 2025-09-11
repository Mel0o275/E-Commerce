import getAllCat from '@/Api/categories.api';
import React from 'react'
import SingleCategory from '../SingleCategoty/SingleCategory';
import { categoryType } from '@/Types/category.type';

export default async function AllCategories() {

  const data = await getAllCat();  

  return <>
        <div className="container w-[80%] mx-auto flex flex-wrap mt-12">
        {data.map((cat : categoryType) => (
          <SingleCategory key={cat._id} cat={cat} />
        ))}
      </div>
  </>
}
