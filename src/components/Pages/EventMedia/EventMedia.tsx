"use client"
import { data } from '@/app/event-media-exhabition-workshop/page'
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { placeHolderBlurImg } from '@/lib/utils'

function EventMedia() {
    return (
        <div className='space-y-16 md:space-y-24 lg::space-y-28 py-12 md:py-16 lg:py-20'>
            {data?.map(i => {
                return <div key={i?.id} className='space-y-5 md:space-y-6 lg:space-y-8'>

                    <div className='flex flex-row items-center gap-x-5 relative'>
                        <p className='uppercase text-sm text-white font-sans flex-shrink-0'>{i?.sectionName}</p>
                        <div className='w-full relative'>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%", transition: { duration: 0.4 } }}
                                viewport={{ once: true }}
                                className='h-0.5 bg-zinc-600 w-full'></motion.div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
                                viewport={{ once: true }}
                                className='absolute -top-[2px] right-0 h-1.5 w-1.5 bg-zinc-600 rounded-full'></motion.span>
                        </div>
                    </div>

                    {/* <motion.h2
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
                        viewport={{ once: true }}
                        className='text-2xl md:text-3xl lg:text-4xl text-white font-instrument font-semibold max-w-md'>{i?.sectionttile}</motion.h2> */}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {i?.datas?.map(cardData => {
                            return <Card key={cardData?.id} data={cardData} rootId={i?.id} />
                        })}
                    </div>

                </div>
            })}
        </div>
    )
}

export default EventMedia

const Card = ({ data, rootId }: { data: any, rootId: number }) => {
    return <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 * data?.id } }}
        viewport={{ once: true }}

        className='bg-white p-4 rounded-xl'>
        <Image src={data?.arts[0]?.img} alt='image' className='w-full h-60 object-cover rounded-lg' placeholder='blur' blurDataURL={placeHolderBlurImg} height={2000} width={2000} />
        <Link href={`/event-media-exhabition-workshop/${rootId}/${data.id}/${data?.title}`}>
            <div className='py-5 px-2 space-y-1.5'>
                <p className='text-zinc-500 text-sm font-poppins'>{data?.timeLine}</p>
                <h6 className='text-black text-xl font-poppins font-semibold'>{data?.title}</h6>
                {data?.subtitle && <p className='text-black text-base font-poppins font-normal'>{data?.subtitle}</p>}
                <p className='text-zinc-500 text-sm font-poppins line-clamp-1'>{data?.details[0]}</p>
                <p className='text-primary font-poppins font-medium'>
                    Read more...
                </p>
            </div>
        </Link>
    </motion.div>

}