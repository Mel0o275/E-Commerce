import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image'

export default function SingleCategory({ cat }: { cat: any }) {
    return (
        <div
            key={cat._id}
            className="inner p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
            <Link href={`/categories/${cat._id}`} className="block">
                <Card className="p-3 border hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 rounded-2xl cursor-pointer">
                    <CardHeader className="flex justify-center">
                        <Image
                            width={200}
                            height={200}
                            src={cat.image}
                            alt={cat.name}
                            className="rounded-xl object-cover w-full h-[180px]"
                        />
                    </CardHeader>
                    <CardContent>
                        <p className="text-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            {cat.name}
                        </p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}
