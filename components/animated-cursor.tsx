"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorTrail, setCursorTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [sparkles, setSparkles] = useState<Array<{ x: number; y: number; id: number }>>([]) // New state for sparkles
  const [isHovering, setIsHovering] = useState(false)
  const { resolvedTheme } = useTheme()

  const cursorColor = resolvedTheme === "dark" ? "#66cc99" : "#007bff" // Green for dark, Blue for light

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add new position to trail, keeping only the last few for a smoother, shorter trail
      setCursorTrail((prev) => {
        const newTrail = [...prev, { ...newPosition, id: Date.now() }]
        return newTrail.slice(-8) // Keep 8 points for a smooth trail
      })

      // Generate a sparkle effect
      const newSparkle = {
        x: e.clientX + (Math.random() - 0.5) * 10, // Small random offset for spread
        y: e.clientY + (Math.random() - 0.5) * 10, // Small random offset for spread
        id: Date.now() + Math.random(), // Unique ID for each sparkle
      }
      setSparkles((prev) => [...prev, newSparkle])

      // Remove sparkle after its animation duration
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
      }, 500) // Match the sparkle animation duration
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)

    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, [role="button"], [data-interactive="true"]',
    )
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Sparkle Effect */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-30" // Very small, low z-index
          style={{ backgroundColor: `${cursorColor}20` }} // Very transparent
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{
            x: sparkle.x - 2, // Center the 4px element
            y: sparkle.y - 2, // Center the 4px element
            opacity: 0,
            scale: 2,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Cursor Trail */}
      {cursorTrail.map((position, index) => (
        <motion.div
          key={position.id}
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-40"
          style={{ backgroundColor: `${cursorColor}40` }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            x: position.x - 4,
            y: position.y - 4,
            opacity: ((index + 1) / cursorTrail.length) * 0.3,
            scale: ((index + 1) / cursorTrail.length) * 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        />
      ))}

      {/* Main Cursor Dot (tracks precisely) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        style={{ backgroundColor: cursorColor }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.01,
        }}
      />

      {/* Outer Cursor Ring (tracks precisely) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-50"
        style={{ borderColor: `${cursorColor}80` }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0.01,
        }}
      />
    </>
  )
}
