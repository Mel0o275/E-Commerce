import React from 'react'
import AllSub from '../_components/AllSub/AllSub'
import allSubCat from '@/Api/allSubCat';

export default async function page() {

  let data = await allSubCat();

    return <>
        <AllSub />

    </>
}
