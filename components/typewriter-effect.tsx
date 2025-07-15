"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: { text: string; className?: string }[]
  className?: string
}

export function TypewriterEffect({ words, className = "" }: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const phrases = [
      "Frontend Developer",
      "Available for new opportunities",
      // Add more phrases here if needed
    ]
    const currentPhrase = phrases[phraseIndex % phrases.length]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
          if (currentText.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1))
          if (currentText.length === 0) {
            setIsDeleting(false)
            setPhraseIndex((prev) => prev + 1)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, phraseIndex])

  return (
    <div className={`text-2xl lg:text-3xl font-semibold ${className}`}>
      <span className="text-foreground/80">{currentText}</span>
      <span className="animate-pulse">|</span>
    </div>
  )
}

export default TypewriterEffect
