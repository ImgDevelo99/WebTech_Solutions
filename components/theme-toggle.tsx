"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 md:h-10 md:w-10 relative overflow-hidden transition-all duration-300 hover:scale-110 
                 text-white hover:bg-white/10 
                 dark:text-white dark:hover:bg-white/10 
                 light:text-slate-700 light:hover:bg-slate-100"
      aria-label="Cambiar tema"
    >
      <Sun
        className="h-4 w-4 md:h-5 md:w-5 absolute inset-0 m-auto transition-all duration-500 
                     rotate-0 scale-100 opacity-100
                     dark:rotate-90 dark:scale-0 dark:opacity-0"
      />
      <Moon
        className="h-4 w-4 md:h-5 md:w-5 absolute inset-0 m-auto transition-all duration-500 
                      rotate-90 scale-0 opacity-0
                      dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}
