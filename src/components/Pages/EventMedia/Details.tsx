"use client";
import Image from "next/image";
import Video from "next-video";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import { SubType } from "@/app/event-media-exhibition-workshop/page";
import { placeHolderBlurImg } from "@/lib/utils";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const MotionImg = motion.create(Image);
const MotionLink = motion.create(Link);

// tiny helper so images work whether path has a leading slash or not
const withSlash = (p?: string) => (p ? (p.startsWith("/") ? p : `/${p}`) : "");

function Details({ matchedData }: { matchedData: SubType }) {
  const [open, setOpen] = useState(false);

  // --- normalize fields ---
  const timeline = matchedData.timeline ?? matchedData.timeLine ?? "";
  const detailsList =
    typeof matchedData.details === "string"
      ? [matchedData.details]
      : matchedData.details ?? [];

  return (
    <div className="py-12 md:py-16 lg:py-20 space-y-5 md:space-y-6 lg:space-y-8">
      {/* Title + date */}
      <div>
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          className="text-3xl lg:text-4xl font-poppins text-white font-semibold"
        >
          {matchedData.title}
        </motion.h3>

        {timeline && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.15 } }}
            className="text-zinc-500 font-poppins font-medium mt-1"
          >
            {timeline}
          </motion.p>
        )}
      </div>

      {/* Optional subtitle */}
      {matchedData.subtitle && (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.15 } }}
          className="text-zinc-200 font-poppins font-medium mt-1 text-lg"
        >
          {matchedData.subtitle}
        </motion.p>
      )}

      {/* Header image for the event (Metro Parks banner) */}
      {matchedData.eventImg && (
        <MotionImg
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          src={withSlash(matchedData.eventImg)}
          alt={`${matchedData.title} – event image`}
          placeholder="blur"
          blurDataURL={placeHolderBlurImg}
          width={1920}
          height={1080}
          className="w-full h-auto rounded-xl"
          priority
        />
      )}

      {/* Details paragraphs */}
      <div>
        <div className="space-y-5 mb-3">
          {detailsList.map((detail, index) => (
            <motion.p
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.1 }}
              }
              className="text-zinc-300 text-base font-poppins"
            >
              {detail}
            </motion.p>
          ))}
        </div>

        {matchedData.link && (
          <MotionLink
            href={matchedData.link}
            target="_blank"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.3 } }}
            className="text-sm md:text-base text-white font-poppins underline underline-offset-2 hover:text-primary duration-300"
          >
            {matchedData.link}
          </MotionLink>
        )}
      </div>

      {/* Artwork grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {matchedData.arts?.map((art) => (
          <figure key={art.id} className="space-y-2">
            <MotionImg
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.1 * art.id }}
              }
              onClick={() => setOpen(true)}
              src={withSlash(art.img)}
              alt={art.title ?? `Artwork ${art.id}`}
              placeholder="blur"
              blurDataURL={placeHolderBlurImg}
              width={1600}
              height={1200}
              className="w-full h-auto cursor-pointer rounded-lg"
            />
            {art.title && <figcaption className="font-medium text-white">{art.title}</figcaption>}
            {art.description && (
              <p className="text-sm opacity-80 text-zinc-300">{art.description}</p>
            )}
          </figure>
        ))}
      </div>

      {/* Optional video */}
      {matchedData.video && (
        <Video
          src={matchedData.video}
          controls
          autoPlay
          loop
          muted
          className="w-full max-w-xl mx-auto h-auto"
        />
      )}

      {/* Lightbox for images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={matchedData.arts?.map((i) => ({ src: withSlash(i.img) })) ?? []}
        plugins={[Fullscreen, Zoom]}
      />
    </div>
  );
}

export default Details;
