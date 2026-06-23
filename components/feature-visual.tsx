"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureVisualProps {
  icon: LucideIcon
  label: string
  stats: { value: string; label: string }[]
  accent?: "indigo" | "cyan" | "violet"
}

const accentMap = {
  indigo: { from: "from-sky-700", to: "to-blue-600", ring: "border-sky-400/30", glow: "bg-sky-700/20" },
  cyan: { from: "from-cyan-600", to: "to-sky-700", ring: "border-cyan-400/30", glow: "bg-cyan-500/20" },
  violet: { from: "from-blue-600", to: "to-cyan-600", ring: "border-blue-400/30", glow: "bg-blue-600/20" },
}

export function FeatureVisual({ icon: Icon, label, stats, accent = "indigo" }: FeatureVisualProps) {
  const colors = accentMap[accent]

  return (
    <div className="relative">
      <div className={`absolute -inset-8 ${colors.glow} rounded-[2.5rem] blur-3xl`} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`glass-card relative aspect-[4/3] flex flex-col items-center justify-center gap-6 rounded-3xl border ${colors.ring} bg-gradient-to-br ${colors.from} ${colors.to} p-10 overflow-hidden`}
      >
        <div className="absolute inset-0 grid-overlay opacity-40" />

        <div className="relative w-24 h-24 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
          <Icon className="w-11 h-11 text-white" strokeWidth={1.5} />
        </div>

        <p className="relative text-sm font-medium text-white/80 text-center max-w-[14rem]">{label}</p>

        <div className="relative grid grid-cols-2 gap-4 w-full max-w-xs">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-black/20 border border-white/10 px-3 py-2 text-center">
              <div className="text-lg font-bold text-white font-mono">{s.value}</div>
              <div className="text-[11px] text-white/60">{s.label}</div>
            </div>
          ))}
        </div>

        <span className="absolute top-5 right-5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </motion.div>
    </div>
  )
}
