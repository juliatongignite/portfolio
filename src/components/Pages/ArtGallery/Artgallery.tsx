"use client"
import React from 'react'
import Image from 'next/image'

import art1 from "../../../../public/arts/art1.jpg"
import art2 from "../../../../public/arts/art2.jpg"
import art3 from "../../../../public/arts/art3.png"
import art4 from "../../../../public/arts/art4.png"
import art5 from "../../../../public/arts/art5.jpg"
import art6 from "../../../../public/arts/art6.jpg"
import art7 from "../../../../public/arts/art7.jpg"
import { IProject } from '../Home/Section3/Carousel'
import { motion } from "motion/react"

export const projects: IProject[] = [
    { id: 1, img: art1, name: "Zumar Construct Firm" },
    { id: 2, img: art2, name: "Zumar Construct Firm" },
    { id: 3, img: art3, name: "Zumar Construct Firm" },
    { id: 4, img: art4, name: "Zumar Construct Firm" },
    { id: 5, img: art5, name: "Zumar Construct Firm" },
    { id: 6, img: art6, name: "Zumar Construct Firm" },
    { id: 7, img: art7, name: "Zumar Construct Firm" },
]

function Artgallery() {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 py-8'>
            {
                projects?.map((project, indx) => {
                    return <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.4,
                                delay: 0.1 * indx
                            },
                        }} key={project?.id} className='relative'>
                        <Image src={project?.img} className='w-full h-[200px] md:h-[380px] lg:h-[450px] xl:h-[540px] object-cover rounded-xl' alt='Juliyatong Art Image' placeholder='blur' />
                        <p className='font-poppins text-sm font-normal absolute bottom-5 left-5 bg-[#191B1B99]/60 rounded px-3 py-1 text-white'>{project?.name}</p>
                    </motion.div>
                })
            }
        </div>
    )
}

export default Artgallery