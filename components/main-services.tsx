export default function MainServices() {
  const services = [
    {
      icon: "bxs-devices",
      title: "Desarrollo Web y Móvil",
      description:
        "Creamos sitios web modernos y apps móviles intuitivas (iOS y Android) que se adaptan a cualquier dispositivo, enfocados en la usabilidad y el rendimiento.",
    },
    {
      icon: "bx-buildings",
      title: "Soluciones Empresariales",
      description:
        "Desarrollamos software a medida, integramos sistemas (CRM, ERP) y automatizamos procesos para maximizar la eficiencia operativa de tu negocio.",
    },
    {
      icon: "bxs-user-voice",
      title: "Asesorías Tecnológicas",
      description:
        "Te acompañamos en tu transformación digital, definiendo estrategias IT, eligiendo las tecnologías adecuadas y adoptando soluciones en la nube.",
    },
    {
      icon: "bx-analyse",
      title: "Análisis de Sistemas",
      description:
        "Evaluamos tus sistemas tecnológicos actuales para identificar áreas de mejora, optimizar el rendimiento y proponer soluciones escalables a futuro.",
    },
    {
      icon: "bxs-cart-alt",
      title: "Tiendas en Línea (E-commerce)",
      description:
        "Construimos plataformas de e-commerce atractivas, seguras y fáciles de gestionar, optimizadas para la conversión y la experiencia del cliente.",
    },
  ]

  return (
    <section id="services" className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(21,128,61,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(132,204,22,0.3),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos un abanico completo de soluciones digitales para llevar tu proyecto al éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-green-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-700/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-lime-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`bx ${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
