"use client"

const partners = [
  "Microsoft",
  "Contentful",
  "VTEX",
  "Adobe Commerce",
  "AWS",
  "Oxiris",
  "Datadog",
  "Eco Safe",
  "Glamping Reino Animal",
]

export default function PartnersSection() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="pill-badge mb-4">Confían en nosotros</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Nuestros clientes, nuestra prioridad
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-slow items-center">
          {[...partners, ...partners].map((name, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-20 px-10 mx-2 flex items-center justify-center glass rounded-2xl"
            >
              <span className="text-lg sm:text-xl font-bold tracking-tight text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
