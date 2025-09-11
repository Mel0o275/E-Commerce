import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from 'next/image';
import { subCat } from '@/Types/sub.type';

export default function SingleCategory({ sub }: { sub: subCat }) {
    return (
        <div
            key={sub._id}
            className="inner p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
            <Link href={`/SubCat/${sub._id}`} className="block">
                <Card className="p-0 border rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300">
                    
                    <CardContent className="bg-white p-4 text-center">
                        <p className="line-clamp-1 text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            {sub.name}
                        </p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}
