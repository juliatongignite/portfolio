import React from 'react'
import { data } from '../../../page';
import { notFound } from 'next/navigation';
import Image from 'next/image';

async function page({ params }: { params: Promise<{ id: string, title: string, subId: string }> }) {
  const { id, title, subId } = await params;

  const decodedTitle = decodeURIComponent(title)

  const matchedData = data
    .find(section => section.id.toString() === id)
    ?.datas.find(item => (item.title === decodedTitle && item?.id.toString() == subId));

  if (!matchedData) {
    notFound();
  }


  return (
    <div className='relative'>
      {/* ------------------for navbar------------- */}
      <div className='bg-[#151515] absolute top-0 left-0 w-full h-[78px]'>
      </div>
      {/* -------------for conteent---------------- */}
      <div className='min-h-screen bg-[#191B1B]'>
        <div className='container pt-[78px]'>
          <div className='py-20 space-y-8'>


            <h3 className='text-2xl font-poppins text-white font-semibold'>{matchedData?.title}</h3>
            <div className='space-y-5'>
              {matchedData?.details?.map((i, indx) => {
                return <p key={indx} className='text-zinc-300 text-base font-poppins'>{i}</p>
              })}
            </div>

            <div className='flex flex-row flex-wrap gap-5'>
              {matchedData?.arts?.map(art => {
                return <Image key={art?.id} alt='art image' src={art?.img} placeholder='blur' className='h-60 w-auto max-w-lg' />
              })}
            </div>

            {
              matchedData?.video && <video width="800" height="240" className='w-full max-w-xl mx-auto h-auto' controls={true} preload="none" autoPlay muted>
                <source src={matchedData?.video} type="video/mp4" />
              </video>
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default page