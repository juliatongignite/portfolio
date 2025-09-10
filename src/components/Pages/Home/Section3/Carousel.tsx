"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


import Image, { StaticImageData } from 'next/image';
import { projects } from '../../ArtGallery/Artgallery';

export interface IProject {
    id: number,
    img: StaticImageData,
    name: string
}



function Carousel() {

    return (
        <div className=''>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".custom-pagination",
                    type: "bullets",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        spaceBetween: 20,
                    },
                    768: {
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="">

                {projects?.map(slide => <SwiperSlide key={slide?.id}>
                    <Image src={slide?.img} className='w-full h-[200px] md:h-[380px] lg:h-[450px] xl:h-[540px] object-cover' alt='Juliyatong Art Image' placeholder='blur' />
                    <p className='font-poppins text-xs md:text-sm lg:text-base font-normal mt-2.5'>{slide?.name}</p>
                </SwiperSlide>)}


            </Swiper>

            <div className='custom-pagination flex !justify-center items-center gap-1.5 lg:gap-2 mt-5 md:mt-8'></div>

            <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #ec4899 !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet:hover {
          background: #9ca3af !important;
        }
        
        .swiper-pagination-bullet-active:hover {
          background: #db2777 !important;
        }
      `}</style>
        </div>
    )
}

export default Carousel