"use client"
import { useScroll, useTransform, motion, useSpring } from 'motion/react';
import React, { useEffect, useRef } from 'react'

export default function Section2() {

    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rawY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, 0, 60]);

    const y = useSpring(rawY, { stiffness: 120, damping: 8 });

    const data = [
        { title: "4K", subTitle: <>Projects<br />Done</> },
        { title: "2K", subTitle: <>Happy<br />Clients</> },
        { title: "9K", subTitle: <>Clients on<br />Worldwide</> },
    ];

    return (
        <div ref={ref} className='bg-black relative z-30'>

            <motion.div
                
                // apply the springy y to the motion.div
                style={{ y }}
                className='container py-32 '>
                <div className='max-w-4xl mx-auto bg-[#151515] rounded-2xl shadow-md py-20 px-16'>

                    <div className='flex flex-row justify-between gap-x-8'>
                        <h2 className='font-poppins text-white font-bold text-6xl'>About <br /> Me.</h2>

                        <p className='font-poppins text-lg text-zinc-400 max-w-lg'>I am a passionate painting artist who expresses emotions, stories, and ideas through colors, textures, and brushstrokes. My work is inspired by the beauty of everyday life, nature, and the depth of human experience. Each painting I create is not just a visual composition but also a reflection of my thoughts, feelings, and philosophy.</p>
                    </div>

                    <div className='mt-16 flex justify-between items-start'>
                        {data?.map(i => <div key={i?.title} className='font-poppins text-white flex flex-row gap-x-3 items-center'>
                            <div className='p-3.5 bg-[linear-gradient(214deg,#B75CFF_6.04%,#F0118B_92.95%)] rounded-xl inline text-2xl font-semibold'>
                                {i?.title}
                            </div>
                            <p className='font-medium text-base leading-5'>{i?.subTitle}</p>
                        </div>)}

                    </div>

                </div>
            </motion.div>

            <div className="w-[1089.093px] h-40 rotate-90 rounded-[1089.093px] opacity-50 bg-[#F0118B] blur-[250px] absolute top-1/2 -left-[544px]">
            </div>

            <div className="w-[589.093px] h-40 rotate-90 rounded-[1089.093px] opacity-50 bg-[#F0118B] blur-[250px] absolute bottom-1/2 -right-[204px]">
            </div>


        </div>
    )
}

