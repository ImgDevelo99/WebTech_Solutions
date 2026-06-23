"use client"

import { motion } from "framer-motion"

const trustedBy = ["Microsoft", "AWS", "Adobe Commerce", "Datadog", "VTEX", "Contentful"]

export default function TrustStrip() {
  return (
    <div className="border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70 whitespace-nowrap">
            Empresas que confían en nosotros
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-sm sm:text-base font-semibold text-muted-foreground/80 hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
