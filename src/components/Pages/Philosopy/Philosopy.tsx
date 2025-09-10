"use client"
import React from 'react'
import { motion } from "motion/react"
import img1 from "../../../../public/philosopy/img1.jpg"
import img2 from "../../../../public/philosopy/img2.jpg"
import img3 from "../../../../public/philosopy/img3.jpg"
import Image from 'next/image'

const data = [
    {
        id: 1,
        title: "About Me",
        details: ["Listing more than one? Enjoy full control over your advertisements, manage your entire space. Once you list a property on our platform, you only have to sit back and watch the world want it.", "If you’re looking for a real estate service that will operate as an extension to your family - stay with us and see!", "If you’re looking for a real estate service that will operate as an extension to your family - stay with us and see!"],
        image: img1
    },
    {
        id: 2,
        title: "Philosophy",
        details: ["Listing more than one? Enjoy full control over your advertisements, manage your entire space. Once you list a property on our platform, you only have to sit back and watch the world want it.", "If you’re looking for a real estate service that will operate as an extension to your family - stay with us and see!", "If you’re looking for a real estate service that will operate as an extension to your family - stay with us and see!"],
        image: img2
    },
    {
        id: 1,
        title: "Background & Experience",
        details: ["Listing more than one? Enjoy full control over your advertisements, manage your entire space. Once you list a property on our platform, you only have to sit back and watch the world want it.", "If you’re looking for a real estate service that will operate as an extension to your family - stay with us and see!", "If you’re looking for a real estate service that will operate as an extension to your family - stay with us and see!"],
        image: img3
    },
]

function Philosopy() {
    return (
        <div className='py-10 md:py-14 lg:py-16 xl:py-20 overflow-hidden'>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
                viewport={{ once: true }}
                className='text-[#36B37E] text-center font-sans text-base'>Philosophy & Background</motion.p>

            {/* ------------------for medum device------------- */}
            <h6 className='text-white font-instrument font-semibold text-4xl lg:text-5xl space-y-2 text-center py-5 hidden md:block'>
                <div className='overflow-hidden whitespace-nowrap '>
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: -2, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                    >The vision, values, and story that shape </motion.h2>
                </div>
                <div className='overflow-hidden whitespace-nowrap'>
                    <motion.h2
                        initial={{ y: "100%" }}
                        viewport={{ once: true }}
                        whileInView={{ y: -2, transition: { duration: 0.4, delay: 0.1 } }}
                    >my journey.</motion.h2>
                </div>
            </h6>

            {/* ------------------for small device ------------- */}
            <h6 className='text-white font-instrument font-semibold text-4xl lg:text-5xl space-y-2 text-center py-5 md:hidden'>
                <div className='overflow-hidden whitespace-nowrap '>
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: -2, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                    >The vision, values, </motion.h2>
                </div>
                <div className='overflow-hidden whitespace-nowrap'>
                    <motion.h2
                        initial={{ y: "100%" }}
                        viewport={{ once: true }}
                        whileInView={{ y: -2, transition: { duration: 0.4, delay: 0.1 } }}
                    >and story that shape</motion.h2>
                </div>
                <div className='overflow-hidden whitespace-nowrap'>
                    <motion.h2
                        initial={{ y: "100%" }}
                        viewport={{ once: true }}
                        whileInView={{ y: -2, transition: { duration: 0.4, delay: 0.2 } }}
                    >my journey.</motion.h2>
                </div>
            </h6>

            {/* -------------philosopy cards---------------- */}
            <div className='space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-40 mt-16 md:mt-20 lg:mt-24 xl:mt-28'>
                {data?.map((i, indx) => {
                    const isEven = indx % 2 === 1

                    return <motion.div key={i?.id}
                        initial={{ x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                        className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                        <div className={`space-y-5 lg:space-y-8 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                            <h3 className='text-4xl font-medium text-primary font-playfair'>{i?.title}</h3>
                            <div className='space-y-8'>
                                {
                                    i?.details?.map((details, ind) => {
                                        return <p key={ind} className='text-zinc-100 text-base font-sans'>{details}</p>
                                    })
                                }
                            </div>
                        </div>

                        <motion.div
                            initial={{ x: 120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                            viewport={{ once: true }}
                            className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                        >
                            <Image
                                src={i?.image} className={`h-[500px] w-[625px] object-cover rounded-xl`} alt='Juliyatong phylosopy image' placeholder='blur' />
                        </motion.div>

                    </motion.div>
                })}
            </div>

        </div>
    )
}

export default Philosopy