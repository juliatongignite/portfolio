"use client"
import React, { useState } from 'react'
import Image from 'next/image'

import { motion } from "framer-motion"
import {
    Lightbox
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { placeHolderBlurImg } from '@/lib/utils';


type SeriesType = {
  id: number;
  title: string;
  arts: {
  id: number;
  img: string;
  name: string;
  media: string;
  Dimensions: string;
  Availability?: string; 
}[];  

};



export const series : SeriesType[] = [
    {
        id: 1,
        title: "Animals at the Nashville Fair, 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/serries1/img5.jpeg",
                name: "Anise the Cow.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "24” x 18”",
                Availability: "Sold."
            },
            {
                id: 2,
                img: "/arts/serries1/img1.jpg",
                name: "Reason the Cow",
                media: "Acrylic gouache on canvas.",
                Dimensions: "24” x 18”"
            },
            {
                id: 3,
                img: "/arts/serries1/img2.jpeg",
                name: "Saxophone the Goat.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "18” x 24”",
                Availability: "Sold."
            },
            {
                id: 4,
                img: "/arts/serries1/img3.jpeg",
                name: "Loki the Pig.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "24” x 18”",
                Availability: "Sold."
            },
            {
                id: 4,
                img: "/arts/serries1/img4.jpeg",
                name: "The bunnies, Oak and River.",
                media: " Acrylic gouache on canvas.",
                Dimensions: "24” x 18”"
            },
            {
                id: 4, 
                img: "/arts/serries1/ducks-lilly-marshall.jpg",
                name: "The Ducks, Lilly and Marshall",
                media: "Acrylic gouache on canvas.",
                Dimensions: "24\" x 18\"",
            },
            {   id:5,
                img: "/arts/serries1/sweet-family.jpg",
                name: "Sweet Family",
                media: "Acrylic gouache on canvas",
                Dimensions: "48\" x 36\"",
            },

        ],
    },
    {
        id: 2,
        title: "Moments of Self, 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/serries2/img1.jpeg",
                name: "Shared Sovereignty.",
                media: " Acrylic gouache on canvas.",
                Dimensions: " 24”x 36”",
                Availability: "Sold."
            },
            {
                id: 2,
                img: "/arts/serries2/img2.jpeg",
                name: " Photo Taken by J at C’s.",
                media: "Acrylic gouache on canvas.",
                Dimensions: "18” x 24”"
            },
        ],
    },
    {
        id: 3,
        title: "This Fairy is Allergic to the Sun, 2024.",
        arts: [
            {
                id: 1,
                img: "/arts/serries8/img1.jpeg",
                name: "This Fairy is Allergic to the Sun",
                media: "Gouache on canvas sheet.",
                Dimensions: "16” x 20”"
            },
        ],
    },
    {
        id: 4,
        title: "A Homey Moment (Chinese American), 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/serries9/img1.jpeg",
                name: "A Homey Moment (Dumplings)",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter"
            },
            {
                id: 2,
                img: "/arts/serries9/img2.png",
                name: "A Homey Moment (Pancakes, Biscuits, and Eggs).",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter."
            },
        ],
    },
    {
        id: 5,
        title: "Pink Faith, 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/serries13/img1.jpeg",
                name: "Tân Định Church in Vietnam",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter"
            },
        ],
    },
    {
        id: 6,
        title: "Seasons, 2024",
        arts: [
            {
                id: 1,
                img: "/arts/serries4/img1.jpeg",
                name: "Winter is Around the Corner.",
                media: " Oil paint on canvas.",
                Dimensions: "24” x 36”"
            },
            {
                id: 2,
                img: "/arts/serries4/img2.jpeg",
                name: "Spring is On the Way",
                media: "Oil paint on canvas.",
                Dimensions: "24” x 36”"
            },
        ],
    },
    {
        id: 7,
        title: "The Sun Forest Dragon, 2024",
        arts: [
            {
                id: 1,
                img: "/arts/serries5/img6.jpeg",
                name: "The Sun Forest Dragon.",
                media: "Acrylic on Paper.",
                Dimensions: "101” x 41”"
            },
        ],
    },
    {
        id: 8,
        title: "Chaos of Life, 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/chaos.png",
                name: "Life is a Chaotic Lasagna",
                media: "Oil paint on canvas.",
                Dimensions: "24” x 36”"
            },
        ],
    },
    {
        id: 9,
        title: "Animal Portraits, 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/serries6/img3.jpeg",
                name: "Song Song the Miniature Poodle.",
                media: " Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter.",
                Availability: "Sold."
            },
            {
                id: 2,
                img: "/arts/serries6/img1.jpeg",
                name: "My Sweet Queen, Sesame",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "20” in diameter."
            },
            {
                id: 3,
                img: "/arts/serries6/img2.jpeg",
                name: "Link the Corgi",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "8” x 10”",
                Availability: "Sold."
            },
            {
                id: 4,
                img: "/arts/serries6/img4.jpeg",
                name: "Kristoff the Goat",
                media: "Acrylic gouache on round canvas.",
                Dimensions: "36” x 48”"
            },
        ],
    },
    {
        id: 10,
        title: "Grief. 2022-2023.",
        arts: [
            {
                id: 1,
                img: "/arts/serries3/img4.jpeg",
                name: "A Day of Grief Made Better by a Friend",
                media: "Oil paint on canvas",
                Dimensions: "16” x 20”"
            },
            {
                id: 2,
                img: "/arts/serries3/img2.jpeg",
                name: "The Beginning of Clarity",
                media: "Oil paint on canvas",
                Dimensions: "16” x 20”"
            },
            {
                id: 3,
                img: "/arts/serries3/img3.jpeg",
                name: "Lillies",
                media: "Oil paint on canvas",
                Dimensions: "24” x 30”"
            },
            {
                id: 4,
                img: "/arts/serries3/img1.jpeg",
                name: "The Sun is Still Coming Tomorrow",
                media: "Oil paint on canvas",
                Dimensions: "12” x 36”"
            },
        ],
    },
    {
        id: 11,
        title: "Trauma Recovery, 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/serries10/img3.jpeg",
                name: "Phase 1",
                media: "Oil paint on a round canvas glued to a digitally printed canvas",
                Dimensions: "16” x 16”"
            },
            {
                id: 2,
                img: "/arts/serries10/img1.jpeg",
                name: "Phase 2",
                media: "Oil paint on a round canvas glued to a digitally printed canvas",
                Dimensions: "16” x 16”"
            },
            {
                id: 3,
                img: "/arts/serries10/img2.jpeg",
                name: "Phase 3",
                media: "Oil paint on a round canvas glued to a digitally printed canvas",
                Dimensions: "16” x 16”"
            },
        ],
    },
    {
        id: 12,
        title: "New Patterns Breaking Bad Habits, 2025.",
        arts: [
            {
                id: 1,
                img: "/arts/serries11/img1.jpeg",
                name: "Silent Treatment",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
            {
                id: 2,
                img: "/arts/serries11/img3.jpeg",
                name: "Codependency",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
            {
                id: 3,
                img: "/arts/serries11/img4.jpeg",
                name: "Judgement on Others",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
            {
                id: 4,
                img: "/arts/serries11/img2.jpeg",
                name: "Judgement on Self",
                media: "Gouache on paper",
                Dimensions: "12” x 12”"
            },
        ],
    },
    {
        id: 12,
        title: "The Smokies",
        arts: [
            {
                id: 1,
                img: "/arts/serries5/img2.jpeg",
                name: "The Smokies, 1",
                media: "Oil paint on canvas",
                Dimensions: "12” x 36”"
            },
            {
                id: 2,
                img: "/arts/serries5/img1.jpeg",
                name: "The Smokies 2",
                media: "Oil paint on canvas.",
                Dimensions: "12” x 36”"
            }
        ],
    },
    {
        id: 13,
        title: "Mini Pieces, 2023-2024.",
        arts: [
            {
                id: 1,
                img: "/arts/serries7/img2.png",
                name: "Strawberry Shortcake",
                media: "Gouache on canvas.",
                Dimensions: "3” x 9” (outer pink frame not included in dimensions)"
            },
            {
                id: 2,
                img: "/arts/serries7/img3.jpeg",
                name: "Strawberry Shortcake",
                media: "Gouache on canvas.",
                Dimensions: "4” x 4”"
            },
            {
                id: 3,
                img: "/arts/serries7/img5.png",
                name: "My Room if I Were Van Gogh",
                media: "Gouache on canvas.",
                Dimensions: " 6” x 6” (outer pink frame not included in dimensions)"
            },
            {
                id: 4,
                img: "/arts/serries7/img6.jpeg",
                name: "Cactus Fields",
                media: "Gouache on canvas.",
                Dimensions: "6” x 8”"
            },
            {
                id: 5,
                img: "/arts/serries7/img1.png",
                name: "Roses",
                media: "Gouache on canvas.",
                Dimensions: "3” x 9” (outer pink frame not included in dimensions)"
            },
            {
                id: 6,
                img: "/arts/serries7/img4.jpeg",
                name: "Photo Taken by J At C’s (small)",
                media: "Gouache on canvas.",
                Dimensions: "3” x 5”"
            },
        ],
    },
    {
        id: 14,
        title: "Soho House Art Crawl Commission, 2024-2025",
        arts: [
            {
                id: 1,
                img: "/arts/serries12/img2.png",
                name: "Weho Art Crawl 2024, Front.",
                media: "Digital illustration",
                Dimensions: ""
            },
            {
                id: 2,
                img: "/arts/serries12/img4.png",
                name: "Weho Art Crawl 2024, Back.",
                media: "Digital illustration",
                Dimensions: ""
            },
            {
                id: 3,
                img: "/arts/serries12/img1.png",
                name: "Weho Art Crawl 2025, Front.",
                media: "Digital illustration",
                Dimensions: ""
            },
            {
                id: 4,
                img: "/arts/serries12/img3.png",
                name: "Weho Art Crawl 2025, Back.",
                media: "Digital illustration",
                Dimensions: ""
            },
        ],
    },
    {
        id: 15,
        title: "Recovery, 2023",
        arts: [
            {
                id: 1,
                img: "/arts/serries14/img1.jpeg",
                name: "Recovery",
                media: "Oil paint on canvas.",
                Dimensions: "36” x 48”"
            },

        ],
    },
]

function Artgallery() {

    return (
        <div className='mt-10'>
            {
                series?.map((project) => {
                    return <div key={project?.id} className='relative pb-14 md:pb-20 lg:pb-24 xl:pb-28 space-y-8'>
                        <div className='overflow-hidden whitespace-nowrap'>
                            <motion.h5
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0, transition: { duration: 0.4 } }}
                                viewport={{ once: true }}
                                className='font-poppins text-white font-semibold text-xl md:text-2xl lg:text-3xl text-center'>{project?.title}</motion.h5>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                project?.arts?.map((art, indx) => {
                                    return <ArtCard key={art.id} art={art} indx={indx} />
                                })
                            }
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default Artgallery

const ArtCard = (
  { art, indx }: {
    art: {
      id: number;
      img: string;
      name: string;
      media: string;
      Dimensions: string;
      Availability?: string; // optional
    };
    indx: number;
  }
) => {
  const { id, img, name, media, Dimensions, Availability } = art;
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 * id } }}
      viewport={{ once: true }}
      className="bg-slate-900/40 p-5 rounded-xl border border-zinc-700"
    >
      <Image
        onClick={() => setOpen(true)}
        src={img}
        alt="art image"
        className="w-full h-auto cursor-pointer"
      />

      <div className="space-y-1.5 mt-5">
        <p className="text-primary font-poppins text-sm font-medium">
          Name : <span className="text-white ml-1">{name}</span>
        </p>
        <p className="text-primary font-poppins text-sm font-medium">
          Media : <span className="text-white ml-1">{media}</span>
        </p>
        <p className="text-primary font-poppins text-sm font-medium">
          Dimensions : <span className="text-white ml-1">{Dimensions}</span>
        </p>
        {Availability && (
          <p className="text-primary font-poppins text-sm font-medium">
            Availability : <span className="text-white ml-1">{Availability}</span>
          </p>
        )}
      </div>
    

        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: img }]}
            // render={{ slide: NextJsImage }}
            plugins={[Fullscreen, Zoom]}
            carousel={{ finite: true, }}
            render={{
                buttonPrev: () => null,
                buttonNext: () => null,
            }}
        />
    </motion.div>
)}