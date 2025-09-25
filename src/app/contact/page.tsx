import Contact from '@/components/Pages/Contact/Contact'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Contact | Juliatong",
    description: "Contact with Juliatong",
};

function ContactPage() {
    return (
        <div className='min-h-screen bg-[#151515]'>
            <div className='container pt-[78px]'>
                <Contact />
            </div>
        </div>
    )
}

export default ContactPage