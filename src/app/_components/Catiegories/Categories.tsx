import getAllCat from '@/Api/categories.api'
import React from 'react'
import CatSlider from '../catSlider/CatSlider';

export default async function Categories() {
  const data = await getAllCat();
  console.log(data);

  return <>
      <h1 className='text-2xl text-blue-500 font-bold p-2 text-center'>Category Slider</h1>
      <CatSlider data={data} />
  </>
}
