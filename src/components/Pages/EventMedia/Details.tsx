"use client"
import { subType } from '@/app/event-media-exhabition-workshop/page'
import Image from 'next/image';
import Video from 'next-video';
import React, { useState } from 'react'
import { motion } from "motion/react"

import {
  Lightbox
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Link from 'next/link';

const MotionImg = motion.create(Image)
const MotionLink = motion.create(Link)

function Details({ matchedData }: { matchedData: subType }) {
  const [open, setOpen] = useState(false)
  return (
    <div className='py-12 md:py-16 lg:py-20 space-y-5 md:space-y-6 lg:space-y-8'>

      <motion.h3 initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        className='text-3xl lg:text-4xl font-poppins text-white font-semibold'>{matchedData?.title}</motion.h3>

      <div>
        <div className='space-y-5 mb-3'>
          {matchedData?.details?.map((i, indx) => {
            return <motion.p initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.1 } }} key={indx} className='text-zinc-300 text-base font-poppins'>{i}</motion.p>
          })}
        </div>
        {matchedData?.link && <MotionLink href={matchedData?.link} target='_blank'
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.3 } }}
          className='text-sm md:text-base text-white font-poppins underline underline-offset-2 hover:text-primary duration-300'>{matchedData?.link}</MotionLink>}
      </div>

      <div className='flex flex-row flex-wrap gap-5'>
        {matchedData?.arts?.map(art => {
          return <MotionImg
            initial={{ y: 30, opacity: 0 }}
            onClick={() => setOpen(true)}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.15 * art?.id } }}
            key={art?.id} alt='art image' src={art?.img} placeholder='blur' height={2000} width={2000} className='w-full h-auto cursor-pointer' />
        })}
      </div>


      {/* {
              matchedData?.video && <video width="800" height="240" className='w-full max-w-xl mx-auto h-60' controls={true} preload="none" autoPlay muted>
                <source src={matchedData?.video} type="video/mp4" />
              </video>
            } */}

      {
        matchedData?.video && <Video
          src={matchedData?.video}
          controls
          autoPlay
          loop
          muted
          className="w-full max-w-xl mx-auto h-auto"
        />
      }

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={matchedData?.arts?.map(i => i?.img)}
        plugins={[Fullscreen, Zoom]}
      // carousel={{ finite: true, }}
      // render={{
      //   buttonPrev: () => null,
      //   buttonNext: () => null,
      // }}
      />

    </div>
  )
}

export default Details