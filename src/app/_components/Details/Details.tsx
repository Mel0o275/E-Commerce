import { productType } from "@/Types/product.type"
import { Button } from "@/components/ui/button"
import React from 'react'
import AddButton from "../AddButton/AddButton";
import AddWish from "../AddWish/AddWish";
import relatedProducts from "@/productCatActions/relatedProducts";

export default function Details({ data }: { data: productType }) {
    return (
        <>
            <div className="text-center items-center container w-full md:w-[70%] mx-auto p-4 flex flex-col md:flex-row">
                {/* Image */}
                <div className="w-2/3 md:w-1/4">
                    <div className="p-4">
                        <img src={data.imageCover} alt={data.title} className="w-full rounded-lg" />
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-3/4 mt-4 md:mt-12">
                    <div className="p-4 space-y-3">
                        <h1 className="text-2xl text-blue-600 font-bold">{data.title}</h1>
                        <p>{data.description}</p>
                        <p className="text-sm text-blue-600">{data.category?.name}</p>

                        <div className="flex justify-between w-full my-4">
                            <p className="text-lg font-semibold">{data.price} EGP</p>
                            <p className="flex items-center gap-1">
                                <i className="fa-solid fa-star text-amber-400"></i>
                                {data.ratingsAverage}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <AddButton id={data.id} />
                            <AddWish id={data.id} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
