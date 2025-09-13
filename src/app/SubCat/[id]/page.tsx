import subCat from '@/Api/subCat';
import SubDetails from '@/app/_components/SubDetails/SubDetails';
import React from 'react'

export default async function SubCat({ params } : {params : Promise<{id : string}>}) {

    const {id} = await params;
    const {data} = await subCat(id);
    return <>
        <SubDetails data={data} />
    </>
    
}
