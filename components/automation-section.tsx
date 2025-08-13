"use client"

export default function AutomationSection() {
  const automationTools = [
    {
      name: "n8n",
      icon: "https://docs.n8n.io/favicon.ico",
      description: "Automatización de flujos de trabajo sin código",
      features: ["Integración de APIs", "Workflows personalizados", "Triggers automáticos"],
    },
    {
      name: "Make",
      icon: "https://www.make.com/en/help/image/uuid-e6e1b0e1-7c0a-4c0a-8c0a-1c0a0c0a0c0a.png",
      description: "Plataforma de automatización visual",
      features: ["Conectores pre-construidos", "Automatización visual", "Escalabilidad empresarial"],
    },
    {
      name: "Zapier",
      icon: "https://cdn.zapier.com/storage/photos/9ec65c79de8ae54080c98384746de8aa.png",
      description: "Conecta tus aplicaciones favoritas",
      features: ["Miles de integraciones", "Automatización simple", "Triggers inteligentes"],
    },
    {
      name: "Power Automate",
      icon: "https://powerautomate.microsoft.com/images/application-logos/svg/powerautomate.svg",
      description: "Automatización empresarial de Microsoft",
      features: ["Integración Office 365", "Flujos de aprobación", "RPA avanzado"],
    },
  ]

  return (
    <section id="automation" className="py-20 bg-slate-800 dark:bg-slate-800 light:bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white dark:text-white light:text-slate-900 mb-6">
            Automatización de Procesos
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Optimizamos tus procesos empresariales mediante herramientas de automatización avanzadas. Reducimos tareas
            repetitivas, mejoramos la eficiencia y liberamos tiempo valioso para que te enfoques en lo que realmente
            importa: hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {automationTools.map((tool, index) => (
            <div
              key={index}
              className="bg-slate-900 dark:bg-slate-900 light:bg-white p-8 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-200 hover:border-green-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-700/10 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-slate-800 dark:bg-slate-800 light:bg-slate-100 rounded-full mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <img
                  src={tool.icon || "/placeholder.svg"}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                    e.currentTarget.nextElementSibling!.style.display = "block"
                  }}
                />
                <i className="fas fa-robot text-2xl text-green-400 group-hover:text-white hidden"></i>
              </div>

              <h3 className="text-xl font-semibold text-white dark:text-white light:text-slate-900 mb-3">
                {tool.name}
              </h3>

              <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-4 leading-relaxed">
                {tool.description}
              </p>

              <ul className="space-y-2">
                {tool.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-400 dark:text-gray-400 light:text-slate-500"
                  >
                    <i className="fas fa-check text-green-400 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-900 dark:bg-slate-900 light:bg-white p-8 rounded-xl border border-slate-700 dark:border-slate-700 light:border-slate-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-white dark:text-white light:text-slate-900 mb-4">
              ¿Por qué automatizar tus procesos?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">75%</div>
                <p className="text-gray-300 dark:text-gray-300 light:text-slate-600">
                  Reducción en tiempo de tareas repetitivas
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                <p className="text-gray-300 dark:text-gray-300 light:text-slate-600">Menos errores humanos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-gray-300 dark:text-gray-300 light:text-slate-600">Operación continua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
