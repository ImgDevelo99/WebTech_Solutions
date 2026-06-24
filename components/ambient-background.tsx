"use client"

import { useScroll, useTransform, motion } from "framer-motion"

export function AmbientBackground() {
  const { scrollY } = useScroll()
  const yBlob1 = useTransform(scrollY, [0, 2000], [0, 260])
  const yBlob2 = useTransform(scrollY, [0, 2000], [0, -220])
  const rotate = useTransform(scrollY, [0, 2000], [0, 35])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 mesh-aurora animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 noise-overlay mix-blend-overlay" />

      <motion.div
        style={{ y: yBlob1, rotate }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-sky-700/10 rounded-full blur-3xl animate-float-slow"
      />
      <motion.div
        style={{ y: yBlob2 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float-delayed"
      />
    </div>
  )
}
