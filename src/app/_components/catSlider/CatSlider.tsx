'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import Image from 'next/image';
import { categoryType } from '@/Types/category.type';


export default function CatSlider({ data } : {data : categoryType[]}) {
    return <>
        <div className="container w-[80%] mx-auto">
        <Swiper
            spaceBetween={0}
            slidesPerView={7}
            modules={[Autoplay]}
            autoplay={{ delay: 1000 }}
        >
            {data.map((cat) =>
                <SwiperSlide key={cat._id}><Image width={400} height={400} src={cat.image} alt="" className='h-[200px] object-cover w-full' />
                    <p className='text-center font-bold'>{cat.name}</p>
                </SwiperSlide>
            )}
        </Swiper>
        </div>
    </>
}
