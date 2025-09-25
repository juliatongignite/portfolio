"use client"
import React from 'react'
import { motion } from "motion/react"
import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'

const MotionLink = motion(Link);


function Footer() {

    const routs = [
        { name: "Artworks Gallery", rout: "/art-gallery", id: 2 },
        { name: "Philosophy", rout: "/philosopy", id: 3 },
        { name: "Highlights", rout: "/event-media-exhabition-workshop", id: 4 },
        { name: "Contact", rout: "/contact", id: 5 },
    ]

    return (
        <div className='bg-black'>
            <div className='container py-12 md:py-16 lg:py-20'>
                <div className='flex flex-col md:flex-row justify-between gap-8'>
                        <motion.h2
                                initial={{ y: 40, opacity : 0 }}
                                whileInView={{ y: 0, opacity : 1, transition: { duration: 0.4 } }}
                                viewport={{ once: true }}
                                className='leading-7 lg:leading-9 text-zinc-300 font-instrument font-semibold text-xl lg:text-3xl space-y-2 max-w-sm lg:max-w-xl'
                            >Let's connect - whether you'd like to collect my art, publish it, or invlite me to tech and speak, I'd love to share my passion with you</motion.h2>

                    <MotionLink initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }} viewport={{ once: true }} href={`/contact`}>
                        <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-white py-1 pl-6 pr-14 font-medium text-primary hover:text-white duration-300">
                            <span className="z-10 pr-2">Get in touch</span>
                            <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-primary transition-[width] duration-300 group-hover:w-[calc(100%-8px)]">
                                <div className="mr-3.5 flex items-center justify-center">
                                    <GoArrowUpRight className='size-5 text-white' />
                                </div>
                            </div>
                        </button>
                    </MotionLink>

                </div>

                <div className='flex flex-col md:flex-row justify-start md:justify-between gap-5 items-center mt-10 md:mt-16 lg:mt-20'>
                    <p className='text-zinc-300 font-poppins mr-auto'>© copy write {new Date().getFullYear()}</p>
                    <div className='flex flex-row items-center flex-wrap gap-5 lg:gap-x-8'>
                        {
                            routs?.map(rout => {
                                return <MotionLink whileHover={"hover"} key={rout?.id} href={rout?.rout} className='text-white font-instrument font-normal relative text-sm md:text-base'>
                                    {rout?.name}
                                    <motion.span
                                        initial={{ width: 0 }}
                                        variants={{
                                            hover: {
                                                width: "100%",
                                                transition: {
                                                    duration: 0.4,
                                                },
                                            }
                                        }} className='absolute -bottom-1 left-0 h-0.5 bg-primary'></motion.span>
                                </MotionLink>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer