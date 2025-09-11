import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import { productType } from '@/Types/product.type'
import AddButton from '../AddButton/AddButton'

export default function SingleProduct({ product }: { product: productType }) {
    return (
        <>
            <div
                key={product.id}
                className="inner p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
                <Card className="gap-2 p-3 border-0 shadow-blue-300">
                    <Link href={`/products/${product.id}`}>
                        <CardHeader>
                            <CardTitle>
                                <Image
                                    width={400}
                                    height={400}
                                    src={product.imageCover}
                                    alt={product.title}
                                    className="rounded-lg object-cover w-full h-[200px]"
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="line-clamp-1 font-bold text-blue-500 text-center">{product.title}</p>
                        </CardContent>
                        <CardDescription className="line-clamp-1 p-1 text-center mb-3">
                                {product.description}
                            </CardDescription>
                        <CardFooter>
                            <div className="flex justify-between w-full">
                                <p className="font-bold text-blue-500">{product.price} EGP</p>
                                <p className="flex items-center gap-1 font-bold">
                                    <i className="fa-solid fa-star text-amber-400"></i>
                                    {product.ratingsAverage}
                                </p>
                            </div>
                        </CardFooter>
                    </Link>
                    <AddButton id={product.id}/>
                </Card>
            </div>
        </>
    );

}
