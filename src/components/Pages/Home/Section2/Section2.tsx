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

                        <p className='font-poppins text-base xl:text-lg text-zinc-400 max-w-md xl:max-w-lg'>I am Julia Tong, a painter and historian whose practice bridges memory, philosophy, and visual storytelling. My Chinese American identity shapes the way I see time — both as cyclical, flowing in Daoist rhythms of yin and yang, and as archival, preserved in the mind palaces of history. These dual perspectives guide my work: I paint not only to capture a moment, but to transform it into a universal offering of empathy and connection.</p>



                    </div>

                    <div className='space-y-5 mt-5'>

                        <p className='font-poppins text-base xl:text-lg text-zinc-400'>
                            My style blends neo-baroque drama and impressionistic atmosphere with influences from Eastern and Western fantasy and anime, creating a dreamy intensity that balances the intimate with the otherworldly. Through this visual language, I reimagine the everyday — from a friend’s wedding to a plate of dumplings or pancakes — as sites of empowerment, love, and shared humanity.
                        </p>

                        <p className='font-poppins text-base xl:text-lg text-zinc-400'>
                            Alongside my artistic practice, I am deeply engaged with historical research, treating each painting as a form of visual historiography: preserving memory, opening it to multiple interpretations, and situating the personal within larger cultural and philosophical narratives. My recurring themes — love, animals, empowerment, time, philosophy, and history — reflect my conviction that art is not only personal but ultimately universal.
                        </p>

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

