"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {

        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e?.clientX, y: e?.clientY })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => window.removeEventListener("mousemove", mouseMove);
    }, [])

    return (
        <motion.div className='h-8 w-8 bg-transparent border border-zinc-300 rounded-full fixed z-50 pointer-events-none'
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
            }}>

        </motion.div>
    )
}

export default Cursor