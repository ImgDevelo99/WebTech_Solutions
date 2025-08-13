"use client"

export default function TechnologiesSection() {
  const technologies = [
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3" },
    { icon: "fab fa-js", name: "JavaScript" },
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-angular", name: "Angular" },
    { icon: "fab fa-vuejs", name: "Vue.js" },
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fab fa-java", name: "Java" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-php", name: "PHP" },
    { icon: "fab fa-laravel", name: "Laravel" },
    { icon: "fab fa-symfony", name: "Symfony" },
  ]

  return (
    <section id="technologies" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Algunas de las Tecnologías que Dominamos</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Utilizamos un stack tecnológico moderno y robusto para construir soluciones escalables, seguras y de alto
            rendimiento, adaptadas a las necesidades específicas de cada proyecto. Nuestra experiencia abarca desde el
            desarrollo frontend y backend hasta la gestión de bases de datos y la creación de aplicaciones móviles
            nativas e híbridas.
          </p>
        </div>

        {/* Technologies Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {/* First set */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-slate-800 rounded-full flex flex-col items-center justify-center border border-slate-700 hover:border-green-700 transition-all duration-300 hover:transform hover:scale-110 group"
              >
                <i
                  className={`${tech.icon} text-3xl text-green-400 group-hover:text-green-300 transition-colors duration-300 mb-2`}
                ></i>
                <h3 className="text-sm font-semibold text-white text-center px-2">{tech.name}</h3>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-slate-800 rounded-full flex flex-col items-center justify-center border border-slate-700 hover:border-green-700 transition-all duration-300 hover:transform hover:scale-110 group"
              >
                <i
                  className={`${tech.icon} text-3xl text-green-400 group-hover:text-green-300 transition-colors duration-300 mb-2`}
                ></i>
                <h3 className="text-sm font-semibold text-white text-center px-2">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
