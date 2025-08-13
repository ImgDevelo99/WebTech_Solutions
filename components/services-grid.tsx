"use client"

import { useState } from "react"

const services = [
  {
    id: "content1",
    title: "Desarrollo de software",
    image: "https://desarrollodesoftware.com.co/storage-desarrollo/desarrollo-de-api.jpg",
    description:
      "Nos especializamos en el desarrollo de aplicaciones personalizadas que se adaptan a las necesidades de tu empresa, con soluciones escalables y eficientes.",
  },
  {
    id: "content2",
    title: "Desarrollo Web",
    image: "https://adecomsoluciones.com/wp-content/uploads/2019/02/Desarrollo-web.jpg",
    description:
      "Creamos sitios web dinámicos y funcionales con tecnologías modernas, enfocados en la experiencia del usuario y la optimización para motores de búsqueda.",
  },
  {
    id: "content3",
    title: "Código seguro",
    image:
      "https://www.portasigma.com/wp-content/uploads/2022/10/que-es-el-codigo-seguro-de-verificacion-del-dni.jpg.webp",
    description:
      "Ofrecemos soluciones para implementar sistemas de seguridad en tus aplicaciones, garantizando la protección de la información con estándares de la industria.",
  },
  {
    id: "content4",
    title: "Expertos en APIs",
    image:
      "https://amarilio.com.mx/wp-content/uploads/2021/03/Expertos-en-desarrolllo-de-apis-en-Mexico-Agencia-de-Marketing-Digital-Amarilio.jpg",
    description:
      "Desarrollamos e implementamos APIs robustas que permiten la integración de sistemas y facilitan la interacción entre diferentes plataformas.",
  },
  {
    id: "content5",
    title: "Transformación Digital",
    image: "https://agenciadigitalamd.com/wp-content/uploads/2021/04/desarrollo-de-software-bogota-800x534-1.jpg",
    description:
      "Acompañamos a las empresas en su proceso de transformación digital, implementando soluciones tecnológicas que mejoran la eficiencia operativa y la competitividad.",
  },
]

export default function ServicesGrid() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleContent = (contentId: string) => {
    setExpandedService(expandedService === contentId ? null : contentId)
  }

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Expertos en Desarrollos a la Medida</h2>
          <p className="text-xl text-gray-300">Empresa de Desarrollo de Software en Colombia</p>
        </div>

        {/* Main Grid - 3 cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.id}
              className={`relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
                index === 1 ? "md:scale-110" : ""
              }`}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-4 drop-shadow-lg">{service.title}</h3>
                <button
                  onClick={() => toggleContent(service.id)}
                  className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-semibold"
                >
                  Ver más
                </button>
                {expandedService === service.id && (
                  <div className="mt-4 p-4 bg-slate-900/90 rounded-lg backdrop-blur-sm">
                    <p className="text-gray-200 leading-relaxed">{service.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service) => (
            <div
              key={service.id}
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-4 drop-shadow-lg">{service.title}</h3>
                <button
                  onClick={() => toggleContent(service.id)}
                  className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-semibold"
                >
                  Ver más
                </button>
                {expandedService === service.id && (
                  <div className="mt-4 p-4 bg-slate-900/90 rounded-lg backdrop-blur-sm">
                    <p className="text-gray-200 leading-relaxed">{service.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
