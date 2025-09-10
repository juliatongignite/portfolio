"use client"
import React from 'react'
import { motion } from "motion/react"
import { PiCrownLight } from 'react-icons/pi'

function Section4() {

    const services = [
        {
            id: 1,
            title: "Concept",
            details: <>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</>
        },
        {
            id: 2,
            title: "Research",
            details: <>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</>
        },
        {
            id: 3,
            title: "Sharing",
            details: <>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</>
        },
        {
            id: 4,
            title: "Growth",
            details: <>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</>
        },
    ];

    return (
        <div className='bg-black py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden z-10'>
            <div className='container'>

                <motion.h3
                    initial={{ x: -70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0, type: "spring", stiffness: 150, damping: 16 } }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-4xl space-x-1.5'>
                    <span className='font-sans font-normal text-white'>My</span>
                    <span className='font-playfair font-normal italic text-primary'>Services</span>
                </motion.h3>

                {/* -----------------for medium device------------ */}
                <div className='md:mt-12 lg:mt-14 xl:mt-16 hidden md:block'>
                    {services?.map((service, indx) => <div key={service?.id} className='relative group overflow-hidden whitespace-nowrap'>
                        <motion.div whileHover={"hover"} className={`w-full flex flex-row items-center justify-between border-zinc-200 py-2.5 lg:py-3 relative ${indx == 0 ? "border-y" : "border-b"}`}>
                            <motion.h6
                                initial={{ y: 70, x: 0 }}

                                whileInView={{
                                    y: 22,
                                    // transition:
                                    // {
                                    //     duration: 0.4,
                                    //     type: "spring",
                                    //     stiffness: 140,
                                    //     damping: 20
                                    // }
                                }}

                                transition={{
                                    duration: 0.4, type: "spring",
                                    delay: 0.05 * indx,
                                    stiffness: 140,
                                    damping: 20
                                }}
                                viewport={{ once: true }}

                                variants={{
                                    hover: {
                                        scale: 1.15,
                                        x: 60,
                                        y: 0,
                                        transition: {
                                            duration: 0.25,
                                            // type: "spring",
                                            // stiffness: 120,
                                            // damping: 40
                                        },
                                    },
                                }
                                }

                                className="text-white text-7xl font-playfair font-extrabold text-left capitalize leading-none w-full" >
                                {service?.title}
                            </motion.h6>

                            <div className='flex flex-row justify-between items-center w-full'>
                                <p className='text-sm font-poppins text-zinc-100'>{service?.details}</p>

                                <span className='border border-zinc-400 rounded-full p-3 text-white hover:text-black hover:bg-white duration-300 transition-colors cursor-pointer'>
                                    <PiCrownLight className='size-5' />
                                </span>
                            </div>

                            <motion.div initial={{ width: 0 }}
                                variants={{
                                    hover: {
                                        width: "100%",
                                        transition: {
                                            duration: 0.6,
                                        },
                                    },
                                }}
                                className='h-1 bg-primary absolute left-0 -bottom-0.5'>

                            </motion.div>
                        </motion.div>
                    </div>)}
                </div>

                {/* ------------------for small device---------------- */}
                <div className='mt-10 md:hidden'>

                    {services?.map((service, indx) => <motion.div

                        initial={{ height: 66 }}
                        whileHover={{ height: "100%", transition: { duration: 0.4 } }}
                        key={service?.id}
                        className={`relative group overflow-hidden whitespace-nowrap ${indx == 0 ? "border-y" : "border-b"} border-zinc-200 hover:border-none`}>

                        <motion.div whileHover={"hover"} className={`w-full flex flex-col gap-y-4 items-center justify-between py-4 relative `}>

                            <motion.h6
                                initial={{ y: 20, x: 0 }}

                                whileInView={{
                                    y: 0,
                                    // transition:
                                    // {
                                    //     duration: 0.4,
                                    //     type: "spring",
                                    //     stiffness: 140,
                                    //     damping: 20
                                    // }
                                }}
                                transition={{
                                    duration: 0.4, type: "spring",
                                    delay: 0.05 * indx,
                                    stiffness: 140,
                                    damping: 20
                                }}
                                viewport={{ once: true }}

                                className="text-white text-6xl md:text-7xl font-playfair font-extrabold text-left capitalize leading-none w-full" >
                                {service?.title}
                            </motion.h6>

                            <div className='flex flex-row justify-between items-center w-full'>
                                <p className='text-sm font-poppins text-zinc-100'>{service?.details}</p>

                                <span className='border border-zinc-400 rounded-full p-2 md:p-3 text-white hover:text-black hover:bg-white duration-300 transition-colors cursor-pointer'>
                                    <PiCrownLight className='size-4 md:size-5' />
                                </span>
                            </div>



                            <motion.div initial={{ width: 0 }}
                                variants={{
                                    hover: {
                                        width: "100%",
                                        transition: {
                                            duration: 0.6,
                                        },
                                    },
                                }}
                                className='h-1 bg-primary absolute left-0 -bottom-0.5'>

                            </motion.div>
                        </motion.div>
                    </motion.div>)}

                </div>

            </div>

            <div className="w-[80px] lg:w-[100px] xl:w-[200px] h-full rotate-90 rounded-[1089.093px] opacity-50 bg-[#F0118B] blur-[250px] absolute top-0 -left-[80px] lg:-right-[130px] xl:-right-[150px] z-20">
            </div>

        </div >
    )
}

export default Section4