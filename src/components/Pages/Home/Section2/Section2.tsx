"use client"
import { useScroll, useTransform, motion, useSpring } from 'motion/react';
import React, { useRef } from 'react'
import { CountUp } from './CountUp';

export default function Section2() {

    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rawY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, 0, 60]);

    const y = useSpring(rawY, { stiffness: 100, damping: 8 });

    const data = [
        { count: 4, suffix: "K", subTitle: <>Projects<br />Done</>, id: 1 },
        { count: 2, suffix: "K", subTitle: <>Happy<br />Clients</>, id: 2 },
        { count: 9, suffix: "K", subTitle: <>Clients on<br />Worldwide</>, id: 3 },
    ];

    return (
        <div ref={ref} className='bg-black relative z-30 overflow-hidden'>

            <motion.div
                // apply the springy y to the motion.div
                style={{ y }}
                className='container py-16 md:py-20 lg:py-28 xl:py-32 '>
                <div className='max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto bg-[#151515] rounded-2xl shadow-md py-8 md:py-10 lg:py-16 xl:py-20 px-8 md:px-10 lg:px-14 xl:px-16'>

                    <div className='flex flex-col lg:flex-row justify-between gap-6 md:gap-8'>
                        <div>
                            <div className='overflow-hidden whitespace-nowrap'>
                                <motion.h2
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0, transition: { duration: 0.4 } }}
                                    viewport={{ once: true }}
                                    className='font-poppins text-white font-bold text-5xl xl:text-6xl'>About</motion.h2>
                            </div>
                            <div className='overflow-hidden whitespace-nowrap'>
                                <motion.h2
                                    initial={{ y: "100%" }}
                                    viewport={{ once: true }}
                                    whileInView={{ y: 0, transition: { duration: 0.4, delay: 0.1 } }}
                                    className='font-poppins text-white font-bold text-5xl xl:text-6xl'>Me.</motion.h2>
                            </div>
                        </div>

                        <p className='font-poppins text-base xl:text-lg text-zinc-400 max-w-md xl:max-w-lg'>I am a passionate painting artist who expresses emotions, stories, and ideas through colors, textures, and brushstrokes. My work is inspired by the beauty of everyday life, nature, and the depth of human experience. Each painting I create is not just a visual composition but also a reflection of my thoughts, feelings, and philosophy.</p>
                        
                    </div>

                    <div className='mt-8 md:mt-12 xl:mt-16 flex flex-col md:flex-row gap-5 justify-between items-start'>
                        {data?.map(i => <div key={i?.id} className='font-poppins text-white flex flex-row gap-x-3 items-center'>
                            <div className='p-3.5 bg-[linear-gradient(214deg,#B75CFF_6.04%,#F0118B_92.95%)] rounded-xl inline text-xl xl:text-2xl font-semibold'>
                                {/* {i?.title} */}
                                <CountUp
                                    suffix={i?.suffix}
                                    to={i?.count}
                                    from={0}
                                    decimals={0}
                                    duration={0.5}
                                    startOnView={true}
                                />
                            </div>
                            <p className='font-medium text-sm xl:text-base leading-5'>{i?.subTitle}</p>
                        </div>)}

                    </div>

                </div>
            </motion.div>

            <div className="w-[150px] lg:w-[300px] xl:w-[600px] h-full rotate-90 rounded-[1089.093px] opacity-50 bg-[#af0f67] blur-[250px] absolute top-0 -left-[90px] lg:-left-[180px] xl:-left-[344px]">
            </div>

            <div className="w-[100px] lg:w-[150px] xl:w-[300px] h-full rotate-90 rounded-[1089.093px] opacity-50 bg-[#F0118B] blur-[250px] absolute -bottom-40 -right-[80px] lg:-right-[150px] xl:-right-[200px]">
            </div>


        </div>
    )
}

