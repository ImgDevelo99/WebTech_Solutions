export default function SoftwareSection() {
  const features = [
    "Planning y Análisis: Investigación del negocio y definición de objetivos.",
    "Wireframes: Estructuras visuales para validar ideas.",
    "Diseño UX/UI: Interfaz atractiva y funcional.",
    "Desarrollo: Código sólido y seguro.",
    "Lanzamiento: Publicación y soporte post-producción.",
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-white leading-tight">
              Líderes en Desarrollo de Software para Empresas
            </h2>
            <h4 className="text-2xl font-serif font-semibold text-green-400">Soluciones a la medida</h4>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                En <strong className="text-white">WebTech_Solutions</strong>, convertimos ideas en soluciones digitales
                diseñadas a la medida de cada empresa. Nuestro equipo combina estrategia, creatividad y tecnología para
                construir productos robustos, escalables y alineados con tus objetivos. Más que desarrolladores, somos
                un aliado que entiende tus procesos y trabaja contigo para optimizar cada etapa de tu negocio mediante
                software eficiente y personalizado.
              </p>
              <p>
                Trabajamos con una metodología clara y centrada en resultados, que incluye:{" "}
                <strong className="text-white">análisis del modelo de negocio</strong>,{" "}
                <strong className="text-white">prototipado con wireframes</strong>,{" "}
                <strong className="text-white">diseño UX/UI</strong>,{" "}
                <strong className="text-white">desarrollo con tecnologías actuales</strong> y{" "}
                <strong className="text-white">lanzamiento acompañado de soporte continuo</strong>. Nos apasiona crear
                soluciones que marquen la diferencia y ayuden a nuestros clientes a crecer y destacar en su sector.
              </p>
            </div>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <i className="bx bx-check-circle text-green-400 text-xl mt-0.5 flex-shrink-0"></i>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://img.freepik.com/foto-gratis/programador-software-apuntando-lapiz-al-codigo-fuente-pantalla-computadora-explicando-algoritmo-companero-trabajo-que-esta-al-lado-escritorio-programadores-discutiendo-computacion-nube-linea-equipo_482257-33535.jpg"
                alt="Equipo de desarrollo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-700/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lime-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
