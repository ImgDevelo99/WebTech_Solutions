"use client"

import { SiDatadog, SiContentful, SiVtex } from "react-icons/si"

const monogramPalette = [
  "linear-gradient(135deg, #0369a1, #22d3ee)",
  "linear-gradient(135deg, #7c3aed, #c084fc)",
  "linear-gradient(135deg, #059669, #34d399)",
  "linear-gradient(135deg, #d97706, #fbbf24)",
  "linear-gradient(135deg, #db2777, #f472b6)",
]

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

// Logos descargados directamente de las empresas reales (con su permiso, son clientes
// reales). Para marcas globales muy reconocidas se usa el favicon oficial o el ícono de
// marca de simple-icons. Las empresas pequeñas sin sitio para consultar usan un monograma
// generado (mismo patron que las iniciales en la sección de testimonios) en vez de
// inventar un logo que no existe.
// `logoOnly: true` => la imagen ya es reconocible/incluye el nombre, no se repite como texto.
// `needsLightBacking: true` => el wordmark tiene texto oscuro/gris que se pierde sobre el
// fondo oscuro del chip; se le pone una placa clara solo detrás del logo (no en todo el chip).
const partners = [
  { name: "Contentful", icon: SiContentful, color: "#2478CC" },
  { name: "VTEX", icon: SiVtex, color: "#ED1164" },
  { name: "AWS", logo: "/logos/aws.png" },
  { name: "Oxiris", logo: "/logos/oxiris.png" },
  { name: "Datadog", icon: SiDatadog, color: "#632CA6" },
  { name: "Eco Safe" },
  { name: "Glamping Reino Animal" },
  { name: "Politécnico Internacional", logo: "/logos/politecnico-internacional.png" },
  { name: "ISI Seguridad Industrial", logo: "/logos/isi-seguridad-industrial.png", logoOnly: true, needsLightBacking: true },
  { name: "Enjofrabim", logo: "/logos/enjofrabim.png", logoOnly: true, needsLightBacking: true },
  { name: "Andina Digital" },
  { name: "Pampa Foods" },
  { name: "Construplan Chile" },
  { name: "Quito Verde" },
  { name: "Bright Harbor Co." },
  { name: "Soluciones Ibérica" },
  { name: "Canal Logistics" },
  { name: "Mercado Sur" },
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
          {[...partners, ...partners].map((partner, index) => {
            const Icon = "icon" in partner ? partner.icon : undefined
            const monogramColor = monogramPalette[index % monogramPalette.length]

            return (
              <div
                key={index}
                className={`flex-shrink-0 h-20 mx-2 flex items-center rounded-2xl glass ${
                  partner.logoOnly ? "justify-center px-8" : "gap-3 px-6"
                }`}
              >
                {"logo" in partner ? (
                  partner.needsLightBacking ? (
                    <div className="bg-white rounded-lg px-3 py-1.5">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="h-6 w-auto max-w-[120px] object-contain"
                      />
                    </div>
                  ) : (
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className={partner.logoOnly ? "h-9 w-auto max-w-[140px] object-contain" : "w-8 h-8 object-contain shrink-0"}
                    />
                  )
                ) : Icon ? (
                  <Icon className="w-7 h-7 shrink-0" style={{ color: partner.color }} />
                ) : (
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                    style={{ background: monogramColor }}
                  >
                    {getInitials(partner.name)}
                  </div>
                )}
                {!partner.logoOnly && (
                  <span className="text-base sm:text-lg font-bold tracking-tight text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                    {partner.name}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
