"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import img1 from "../../../../../public/featured-work/233706E3-CC09-408D-802C-E02CDCFC5484.jpg"
import img2 from "../../../../../public/featured-work/BD1EF6E3-6769-441E-8EEF-02FA09CF167C.jpg"
import img3 from "../../../../../public/featured-work/D3470175-9037-4153-8E80-8A1027C0F383.jpg"
import img4 from "../../../../../public/featured-work/E79F0AC5-0950-485F-8C77-EEED2EB18FB5.jpg"
import img5 from "../../../../../public/featured-work/F1D158C8-A838-426D-9914-63921DED52E7.jpg"

import Image, { StaticImageData } from 'next/image';

export interface IProject {
    id: number,
    img: StaticImageData,
    name: string
}

export const featuredWorks: IProject[] = [
    { id: 1, img: img1, name: "This Fairy is Allergic to the Sun" },
    { id: 2, img: img2, name: "Recovery" },
    { id: 3, img: img3, name: "Song Song the Miniature Poodle" },
    { id: 4, img: img4, name: "Shared Sovereignty" },
    { id: 5, img: img5, name: "Anise the Cow" },
]



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

                {featuredWorks?.map(slide => <SwiperSlide key={slide?.id}>
                    <Image src={slide?.img} className='w-full h-[200px] md:h-[380px] lg:h-[450px] xl:h-[540px] object-cover' alt='Juliatong Art Image' placeholder='blur' />
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