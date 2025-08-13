"use client"

export default function PartnersSection() {
  const partners = [
    { name: "Microsoft", logo: "https://1000marcas.net/wp-content/uploads/2019/12/Microsoft-Logo.png" },
    {
      name: "Contentful",
      logo: "https://images.ctfassets.net/crb83veve8xb/3X8sgBCjbKKo3mPxGXiYlS/3a713ef1ca321546eb2a750c143de782/CONTENTFUL_PORTADA.png",
    },
    {
      name: "VTEX",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbkX9JadE6T2wKLf_uI1kGFEn5LjaiBvFlA&s",
    },
    {
      name: "Adobe Commerce",
      logo: "https://cdn.prod.website-files.com/657639ebfb91510f45654149/67b4c29f569de72913a85f96_adobe-commerce-logo.png",
    },
    {
      name: "AWS",
      logo: "https://yt3.googleusercontent.com/uFYt2jmQ9-Z3Mx1YT9G1tpZHNbzTYhWNITSHr6x0UrggRvzJ7U_HeIrS9WhR2evjHWsG4jDalw=s900-c-k-c0x00ffffff-no-rj",
    },
    { name: "Oxiris", logo: "https://oxirischemicals.com/wp-content/uploads/2021/03/2007-Oxiris.png" },
    { name: "Datadog", logo: "https://cdnlogo.com/logos/d/11/datadog-wordmark.svg" },
    { name: "Eco Safe", logo: "https://eco-safe.ai/wp-content/uploads/2024/05/cropped-logo-eco-safe-296x99.jpg" },
    {
      name: "Glamping",
      logo: "https://glampingreinoanimal.com.mx/wp-content/uploads/2024/09/Logotipo-Glamping-2024-redes-01.png",
    },
    {
      name: "Client",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjHvBSlZJhJM5Zj1Afh1YnAYMalXvjrAmBA&s",
    },
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Nuestros clientes nuestra prioridad</h2>
        </div>

        {/* Partners Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-partners space-x-12">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center p-4 hover:transform hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-lg flex items-center justify-center p-4 hover:transform hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-partners {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-partners {
          animation: scroll-partners 40s linear infinite;
        }
        .animate-scroll-partners:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
