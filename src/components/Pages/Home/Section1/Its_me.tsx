"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

interface WritingAnimationProps {
    text: string
    className?: string
    delay?: number
    speed?: number
}

export default function Its_me({ text, className = "", delay = 0, speed = 0.1 }: WritingAnimationProps) {

    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex])
                setCurrentIndex((prev) => prev + 1)
            }, speed * 1000)

            return () => clearTimeout(timeout)
        } else if (currentIndex === text.length && !isComplete) {
            setIsComplete(true)
        }
    }, [currentIndex, text, speed, isComplete])

    useEffect(() => {
        if (isComplete && currentIndex < text.length) {
            const startTimeout = setTimeout(() => {
                setCurrentIndex(0)
                setDisplayedText("")
                setIsComplete(false)
            }, delay * 1000)

            return () => clearTimeout(startTimeout)
        }
    }, [delay, isComplete])


    return (
        <div className={`relative ${className}`}>
            <span className="font-playfair font-normal italic text-white">{displayedText}</span>
            {!isComplete && (
                <motion.span
                    className="inline-block w-0.5 h-6 bg-white ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    }}
                />
            )}
        </div>
    )
}

