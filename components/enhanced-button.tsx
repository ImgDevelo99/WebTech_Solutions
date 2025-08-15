"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient" | "glow"
  size?: "default" | "sm" | "lg" | "icon"
  animation?: "none" | "bounce" | "pulse" | "wiggle" | "glow" | "shimmer"
  children: React.ReactNode
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant = "default", size = "default", animation = "none", children, ...props }, ref) => {
    const animationClasses = {
      none: "",
      bounce: "hover:animate-bounce-in",
      pulse: "hover:animate-pulse",
      wiggle: "hover:animate-wiggle",
      glow: "animate-glow",
      shimmer: "animate-shimmer bg-gradient-to-r from-green-600 via-lime-500 to-green-600",
    }

    const variantClasses = {
      gradient:
        "bg-gradient-to-r from-green-600 to-lime-500 text-white hover:from-green-700 hover:to-lime-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
      glow: "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/50 hover:shadow-2xl transition-all duration-300",
    }

    if (variant === "gradient" || variant === "glow") {
      return (
        <button
          className={cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            size === "default" && "h-10 px-4 py-2",
            size === "sm" && "h-9 rounded-md px-3",
            size === "lg" && "h-11 rounded-md px-8",
            size === "icon" && "h-10 w-10",
            variantClasses[variant],
            animationClasses[animation],
            "hover-lift",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      )
    }

    return (
      <Button
        className={cn(animationClasses[animation], "hover-lift transition-all duration-300", className)}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton }
