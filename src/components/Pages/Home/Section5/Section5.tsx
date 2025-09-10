"use client"
import { motion } from "motion/react"
import React from 'react'
import testimonialimg from "../../../../../public/testimonial.png"
import Image from "next/image"
import { CountUp } from "../Section2/CountUp"
import ratingImg from "../../../../../public/rating.svg"
import ClientSlider from "./ClientSlider"

const MotionImg = motion(Image);

function Section5() {
    return (
        <div className='bg-[#151515] relative overflow-hidden'>
            <div className='container py-16 md:py-24 lg:py-32 xl:py-36'>
                <div>

                    <div className='flex flex-row items-center gap-x-5 relative'>
                        <p className='uppercase text-sm text-white font-poppins flex-shrink-0'>OUR CLIENT’S OPINION</p>
                        <div className='w-full relative'>
                            <motion.div

                                initial={{ width: 0 }}
                                whileInView={{ width: "100%", transition: { duration: 0.4 } }}
                                viewport={{ once: true }}
                                className='h-0.5 bg-zinc-600 w-full'></motion.div>


                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                                viewport={{ once: true }}
                                className='absolute -top-[2px] right-0 h-1.5 w-1.5 bg-zinc-600 rounded-full'></motion.span>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 border-b border-zinc-600">

                        <motion.div
                            initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                initial={{ x: -70, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0, type: "spring", stiffness: 150, damping: 16 } }}
                                viewport={{ once: true }}
                                className='text-3xl md:text-4xl space-x-3'>
                                <span className='font-sans font-normal text-white'>My Client</span>
                                <span className='font-playfair font-normal italic text-primary'>Testimonial</span>
                            </motion.h3>

                            <p className="text-base font-poppins text-zinc-500 my-8">
                                Lorem Ipsum is simply dummy text the printing and typesetting industry. Ipsum has been dummy text ever since the 1500.
                            </p>

                            <div className="grid grid-cols-2 gap-x-5">
                                <div className="space-y-5">
                                    <p className="uppercase font-poppins text-white text-base">SIGNIFICANT CLIENTS</p>

                                    <div>
                                        <CountUp to={58} duration={0.7} startOnView suffix="+" className="text-5xl text-primary font-medium font-instrument" />
                                    </div>

                                    <p className="text-white text-sm font-poppins">All are prominent client</p>

                                    <p className="text-sm font-poppins text-zinc-500">
                                        Lorem Ipsum is simply dummy printing and typesetting industry Ipsum.
                                    </p>
                                </div>
                                <div className="space-y-5">
                                    <p className="uppercase font-poppins text-white text-base">AVERAGE RATING</p>

                                    <div className="flex flex-row gap-x-2 items-center">
                                        <CountUp to={4.8} decimals={1} duration={0.7} startOnView className="text-5xl text-primary font-medium font-instrument" />
                                        <Image src={ratingImg} className='w-28 h-auto object-cover rounded-lg' alt='Juliyatong rating svg' />
                                    </div>

                                    <p className="text-white text-sm font-poppins">The client has given ratings</p>

                                    <p className="text-sm font-poppins text-zinc-500">
                                        Lorem Ipsum is simply dummy printing and typesetting industry Ipsum.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <MotionImg
                            initial={{ x: 60, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                            viewport={{ once: true }}
                            src={testimonialimg} className='w-auto h-96 object-cover rounded-lg mr-auto lg:ml-auto' alt='Juliyatong Testimonial Image' placeholder='blur' />

                    </div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.02 } }}
                    >
                        <ClientSlider />
                    </motion.div>

                </div>
            </div>

            <div className="w-[60px] lg:w-[90px] xl:w-[120px] h-full rotate-90 rounded-[200px] opacity-50 bg-[#af0f67] blur-[250px] absolute top-0 -left-[70px] lg:-left-[100px] xl:-left-[200px]">
            </div>

            <div className="w-[60px] lg:w-[90px] xl:w-[120px] h-full rotate-90 rounded-[200px] opacity-50 bg-[#af0f67] blur-[250px] absolute bottom-20 -right-[70px] lg:-left-[100px] xl:-left-[200px]">
            </div>

        </div>
    )
}

export default Section5