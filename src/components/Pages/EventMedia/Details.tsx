"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import VideoPlugin from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

import type { SubType } from "@/app/event-media-exhibition-workshop/page";

const withSlash = (p?: string) => (p ? (p.startsWith("/") ? p : `/${p}`) : "");

type Props = { matchedData: SubType };

export default function Details({ matchedData }: Props) {
  const title = matchedData.title ?? "";
  const timeline = matchedData.timeline ?? matchedData.timeLine ?? "";

  const detailsList = Array.isArray(matchedData.details)
    ? matchedData.details
    : matchedData.details
    ? [matchedData.details]
    : [];

  const headerImg = matchedData.eventImg ?? matchedData.arts?.[0]?.img ?? null;

  const artsAfterHeader = useMemo(() => {
    if (!matchedData.arts) return [];
    return headerImg && !matchedData.eventImg
      ? matchedData.arts.slice(1)
      : matchedData.arts;
  }, [matchedData.arts, headerImg, matchedData.eventImg]);

  const slides = useMemo(() => {
    const list: any[] = [];

    if (matchedData.link && headerImg) {
      list.push({
        kind: "external",
        src: withSlash(headerImg),
        href: matchedData.link,
        label: "Watch on NewsChannel 5",
      });
    } else if (headerImg) {
      list.push({
        src: withSlash(headerImg),
      });
    }

    for (const art of artsAfterHeader) {
      if (art?.img) {
        list.push({
          src: withSlash(art.img),
        });
      }
    }

    if (matchedData.video) {
      list.push({
        type: "video",
        sources: [{ src: withSlash(matchedData.video), type: "video/mp4" }],
      });
    }

    return list;
  }, [matchedData.link, matchedData.video, headerImg, artsAfterHeader]);

  return (
    <div className="py-12 md:py-16 lg:py-20 space-y-12">
      {/* Title */}
      <div>
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          className="text-3xl lg:text-4xl font-poppins text-white font-semibold"
        >
          {title}
        </motion.h3>

        {!!timeline && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.15 } }}
            className="text-zinc-500 font-poppins font-medium mt-1"
          >
            {timeline}
          </motion.p>
        )}
      </div>

      {/* Paragraphs */}
      {detailsList.length > 0 && (
        <div className="space-y-6 max-w-4xl">
          {detailsList.map((detail, i) => (
            <motion.p
              key={i}
              initial={{ y: 24, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.35, delay: 0.04 * i },
              }}
              className="text-zinc-300 text-base font-poppins leading-relaxed"
            >
              {detail}
            </motion.p>
          ))}
        </div>
      )}

      {/* Media Section */}
      {slides.length > 0 && (
        <div className="pt-12">
          {/* If only one image (no carousel needed) */}
          {slides.length === 1 && !slides[0].type && !slides[0].kind ? (
            <motion.img
              src={slides[0].src}
              alt={slides[0].title ?? "Artwork"}
              className="mx-auto w-full max-w-5xl rounded-xl object-contain"
              style={{ maxHeight: "85vh" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <Lightbox
              inline={{
                style: {
                  width: "100%",
                  maxWidth: "1024px",
                  margin: "0 auto",
                  backgroundColor: "transparent",
                  borderRadius: 12,
                  height: 560,
                },
              }}
              carousel={{
                imageFit: "contain",
                padding: 0,
                spacing: 0,
              }}
              controller={{ closeOnBackdropClick: false }}
              zoom={{ maxZoomPixelRatio: 2, scrollToZoom: true }}
              plugins={[Inline, Zoom, Fullscreen, VideoPlugin]}
              slides={slides as any}
            />
          )}
        </div>
      )}
    </div>
  );
}
