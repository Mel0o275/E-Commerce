'use client'

import React from 'react'
import img1 from '../../../../public/1.jpeg'
import img2 from '../../../../public/2.jpeg'
import img3 from '../../../../public/3.jpeg'
import img4 from '../../../../public/4.jpeg'
import img5 from '../../../../public/5.jpeg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'


export default function MainSlider() {
    return (
        <div className="w-full md:w-[80%] mx-auto p-4 my-4 flex flex-col md:flex-row gap-4">
            {/* Slider */}
            <div className="w-full md:w-3/4">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000 }}
                >
                    <SwiperSlide>
                        <Image alt="" src={img1} className="w-full object-cover h-[250px] md:h-[400px]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="" src={img2} className="w-full object-cover h-[250px] md:h-[400px]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="" src={img3} className="w-full object-cover h-[250px] md:h-[400px]" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Side images */}
            <div className="w-full md:w-1/4 flex md:flex-col gap-4">
                <Image alt="" src={img4} className="w-full object-cover h-[150px] md:h-[200px]" />
                <Image alt="" src={img5} className="w-full object-cover h-[150px] md:h-[200px]" />
            </div>
        </div>
    );

}
