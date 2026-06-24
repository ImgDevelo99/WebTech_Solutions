import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { MouseEvent } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Tracks cursor position relative to the element as CSS vars (--spot-x/--spot-y),
// consumed by the .glass-card spotlight hover effect in globals.css.
export function handleSpotlight(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`)
}
