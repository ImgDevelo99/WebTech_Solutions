"use client"

interface LogoProps {
  size?: "sm" | "md"
  showWordmark?: boolean
  className?: string
}

/**
 * Custom mark: an abstract "W" drawn as a single circuit-style stroke,
 * with an accent node above it (connection point). Replaces the generic
 * sparkle icon so the brand isn't relying on a stock Lucide glyph.
 */
function LogoMark({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "w-7 h-7" : "w-9 h-9"
  const iconSize = size === "sm" ? 16 : 19

  return (
    <div
      className={`${box} shrink-0 rounded-xl bg-gradient-to-br from-sky-700 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-700/30 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3`}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5.4" r="1.6" fill="white" />
        <path
          d="M3.5 8 L8 16.5 L12 9.5 L16 16.5 L20.5 8"
          stroke="white"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

export function Logo({ size = "md", showWordmark = true, className = "" }: LogoProps) {
  const textSize = size === "sm" ? "text-base" : "text-lg"

  return (
    <div className={`group flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      {showWordmark && (
        <span className={`${textSize} font-bold tracking-tight text-foreground leading-none`}>
          WebTech<span className="font-mono font-medium text-gradient-brand">_Solutions</span>
        </span>
      )}
    </div>
  )
}
