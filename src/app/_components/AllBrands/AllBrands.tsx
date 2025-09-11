import allBrands from '@/Api/allbrands';
import React from 'react';
import SingleBrand from '../SingleBrand/SingleBrand';

export default async function AllBrands() {
  let data = await allBrands(); // returns array of brand objects

  return (
    <div className="container w-[80%] mx-auto flex flex-wrap mt-12">
      {data.map((brand: any) => (
        <SingleBrand key={brand._id} brand={brand} />
      ))}
    </div>
  );
}
