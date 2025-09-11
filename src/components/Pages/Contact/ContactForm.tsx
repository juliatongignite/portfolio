"use client"
import { HandleSendMessage } from '@/utils/ServerActions';
import React, { useState } from 'react'
import { ImSpinner2 } from "react-icons/im";

function ContactForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const target = e?.currentTarget as any;
            const name = target?.name?.value;
            const email = target?.email?.value;
            const phone = target?.phone?.value;
            const message = target?.message?.value;
            setIsLoading(true)

            const res = await HandleSendMessage({ name, email, phone, message });

            console.log(res)

            if (res?.success) {
                setSuccess(true)
                setError(null)

                target.reset();
            } else {
                setError(res?.message)
                setSuccess(false)
            }
        } catch (err: any) {
            setError(err?.data?.message)
            setSuccess(false)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-xl bg-[linear-gradient(180deg,rgba(67,82,111,0.10)_0%,rgba(34,69,133,0.40)_100%)] backdrop-blur-[10px] max-w-md mx-auto p-10 space-y-5">

            {/* ------------------for success---------------- */}
            {success && <div className='bg-green-500/20 rounded text-white font-poppins px-4 py-2 text-xs border border-green-800'>
                <p className=''>Message Sent successfully</p>
            </div>}

            {/* ------------------for error---------------- */}
            {error && <div className='bg-red-500/20 rounded text-white font-poppins px-4 py-2 text-xs border border-red-800'>
                <p className=''>{error}</p>
            </div>}

            <div className="relative">
                <input name="name" type="text" required id="floating_outlined" className="block px-4 pb-3 pt-5 w-full text-base text-zinc-100 bg-white/5 rounded-[6px] focus:outline-none peer font-abeezee" placeholder=" " />

                <label htmlFor="floating_outlined" className="absolute text-sm text-zinc-50 duration-300 transform -translate-y-4  top-2 z-10 origin-[0] px-4 peer-focus:px-4  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-poppins pointer-events-none">Name</label>
            </div>

            <div className="relative">
                <input name="email" type="email" required id="floating_outlined" className="block px-4 pb-3 pt-5 w-full text-base text-zinc-100 bg-white/5 rounded-[6px] focus:outline-none peer font-abeezee" placeholder=" " />

                <label htmlFor="floating_outlined" className="absolute text-sm text-zinc-50 duration-300 transform -translate-y-4  top-2 z-10 origin-[0] px-4 peer-focus:px-4  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-poppins pointer-events-none">Email</label>
            </div>

            <div className="relative">
                <input name='phone' type="number" required id="floating_outlined" className="block px-4 pb-3 pt-5 w-full text-base text-zinc-100 bg-white/5 rounded-[6px] focus:outline-none peer font-abeezee" placeholder=" " />

                <label htmlFor="floating_outlined" className="absolute text-sm text-zinc-50 duration-300 transform -translate-y-4  top-2 z-10 origin-[0] px-4 peer-focus:px-4  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-poppins pointer-events-none">Phone</label>
            </div>

            <div className="relative">
                <textarea name="message" rows={5} required id="floating_outlined" className="block px-4 pb-3 pt-5 w-full text-base text-zinc-100 bg-white/5 rounded-[6px] focus:outline-none peer font-abeezee" placeholder=" " />

                <label htmlFor="floating_outlined" className="absolute text-sm text-zinc-50 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] px-4 peer-focus:px-4  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-7 peer-focus:top-2  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 font-poppins pointer-events-none">Message</label>
            </div>

            <button disabled={isLoading} type='submit' className='bg-primary text-white p-2.5 uppercase text-base font-poppins font-medium rounded-xl w-full flex flex-row gap-x-2 items-center justify-center disabled:cursor-not-allowed disabled:bg-opacity-80'>
                {isLoading && <ImSpinner2 className='size-4 text-white animate-spin' />}
                <p>Submit Now</p>
            </button>

        </form>
    )
}

export default ContactForm