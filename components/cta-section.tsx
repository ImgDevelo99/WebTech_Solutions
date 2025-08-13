"use client"

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-lime-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-serif font-bold text-white leading-tight">
            ¿Listo para transformar tu presencia digital?
          </h2>
          <p className="text-xl text-green-100 leading-relaxed">
            Conversemos sobre tus ideas y cómo nuestra experiencia puede ayudarte a alcanzar tus metas. ¡El primer paso
            hacia el éxito empieza aquí!
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </section>
  )
}
