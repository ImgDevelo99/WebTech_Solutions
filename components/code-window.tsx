"use client"

import { motion } from "framer-motion"

const lines = [
  { indent: 0, text: "export function buildProduct() {", color: "text-sky-300" },
  { indent: 1, text: "const strategy = defineRoadmap();", color: "text-slate-300" },
  { indent: 1, text: "const ui = craftExperience(strategy);", color: "text-slate-300" },
  { indent: 1, text: "deploy(ui).to('cloud');", color: "text-cyan-300" },
  { indent: 0, text: "}", color: "text-sky-300" },
  { indent: 0, text: "" , color: "text-slate-300"},
  { indent: 0, text: "// status: shipping value daily", color: "text-emerald-400/80" },
]

export function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md"
    >
      <div className="absolute -inset-6 bg-gradient-to-br from-sky-700/30 via-blue-600/20 to-cyan-400/30 rounded-[2rem] blur-2xl" />

      {/* Code editors are conventionally dark — kept dark regardless of site theme for authenticity */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-slate-900 border border-white/10">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-rose-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs font-mono text-slate-400">product.ts</span>
        </div>

        <div className="p-6 font-mono text-sm leading-relaxed">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
              className={line.color}
              style={{ paddingLeft: `${line.indent * 1.25}rem` }}
            >
              {line.text || " "}
              {i === lines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="inline-block w-2 h-4 bg-cyan-300 ml-1 align-middle"
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            build passing
          </div>
          <span className="text-xs font-mono text-slate-400">main</span>
        </div>
      </div>

      {/* Orbiting accent dots */}
      <div className="absolute inset-0 animate-spin-slow pointer-events-none">
        <span className="absolute -top-2 left-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50" />
      </div>
      <div className="absolute inset-0 animate-spin-reverse-slow pointer-events-none">
        <span className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-sky-300 shadow-lg shadow-sky-300/50" />
      </div>
    </motion.div>
  )
}
