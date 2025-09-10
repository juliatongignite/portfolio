import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import client1 from "../../../../../public/client1.png"
import client2 from "../../../../../public/client2.png"
import Image, { StaticImageData } from 'next/image'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'


interface Iclient {
    id: number,
    image: StaticImageData,
    name: string,
    role: string,
    date: string,
    title: string,
    subtitle: string
}

function ClientSlider() {

    const clients: Iclient[] = [
        {
            id: 1,
            image: client1,
            name: "Jonathan Smith",
            role: "Marketing Manager",
            date: "14th July 2024",
            title: "Colors that Speak Beyond Words",
            subtitle: "The way he blends colors and forms is exceptional. Each artwork feels like a journey into a new world of imagination."
        },
        {
            id: 2,
            image: client2,
            name: "Jonathan Smith",
            role: "Marketing Manager",
            date: "14th July 2024",
            title: "An Artist with Soulful Vision",
            subtitle: "Remarkable talent! His ability to capture feelings through colors is rare. Each piece is timeless and unique."
        },
        {
            id: 5,
            image: client2,
            name: "Jonathan Smith",
            role: "Marketing Manager",
            date: "14th July 2024",
            title: "An Artist with Soulful Vision",
            subtitle: "Remarkable talent! His ability to capture feelings through colors is rare. Each piece is timeless and unique."
        },
        {
            id: 6,
            image: client1,
            name: "Jonathan Smith",
            role: "Marketing Manager",
            date: "14th July 2024",
            title: "Colors that Speak Beyond Words",
            subtitle: "The way he blends colors and forms is exceptional. Each artwork feels like a journey into a new world of imagination."
        },
    ]

    const chunkedClient: Iclient[][] = [];

    for (let i = 0; i < clients?.length; i += 2) {
        chunkedClient.push(clients.slice(i, i + 2))
    }

    return (
        <div>
            <Carousel>
                <CarouselContent>

                    {chunkedClient?.map((chunc, indx) => {
                        return <CarouselItem key={indx}>
                            {
                                chunc?.map(client => {
                                    return <ClientCard key={client?.id} client={client} />
                                })
                            }
                        </CarouselItem>
                    }
                    )}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default ClientSlider

const ClientCard = ({ client }: { client: Iclient }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isUnLiked, setIsUnLiked] = useState<boolean>(false);

    return <div className='w-full flex flex-col lg:flex-row gap-5 justify-between px-4 py-5 my-3 md:my-5'>
        <div className='flex flex-row gap-x-5 lg:gap-x-8 w-full'>
            <Image src={client?.image} className='w-20 md:w-24 lg:w-28 h-auto object-cover rounded-md' alt='Juliyatong client image' placeholder='blur' />
            <div className='space-y-1 md:space-y-1.5'>
                <p className='text-white font-poppins text-lg md:text-xl lg:text-2xl font-medium'>{client?.name}</p>
                <p className='text-primary font-poppins text-sm md:text-base'>{client?.role}</p>
                <p className='text-white font-poppins text-sm md:text-base'>{client?.date}</p>
            </div>
        </div>
        <div className='flex flex-row justify-between w-full'>
            <div className='space-y-2 md:space-y-3'>
                <h3 className='text-xl md:text-xl lg:text-2xl text-white font-poppins font-medium'>{client?.title}</h3>
                <p className='text-zinc-600 font-poppins text-sm md:text-base'>{client?.subtitle}</p>
            </div>
            <div className='flex flex-row gap-x-3'>
                {isLiked ?
                    <button onClick={() => {
                        setIsLiked(false)
                    }}>
                        <AiFillLike className='text-primary size-6' />
                    </button> :

                    <button onClick={() => {
                        setIsLiked(true)
                        setIsUnLiked(false)
                    }}>
                        <AiOutlineLike className='text-primary size-6' />
                    </button>
                }

                {isUnLiked ?
                    (<button onClick={() => setIsUnLiked(false)}>
                        <AiFillLike className='text-primary size-6 rotate-180' />
                    </button>) :

                    <button onClick={() => {
                        setIsUnLiked(true)
                        setIsLiked(false)
                    }}>
                        <AiOutlineLike className='text-primary size-6 rotate-180' />
                    </button>
                }

            </div>
        </div>
    </div>
}