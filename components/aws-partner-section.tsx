export default function AWSPartnerSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://ausum.cloud/wp-content/uploads/2024/02/aws-servicios-principales.jpg"
                alt="AWS Partner Logo"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-white">Socios de AWS</h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Como socios certificados de Amazon Web Services (AWS), en WebTech_Solutions ofrecemos soluciones cloud de
              clase mundial respaldadas por la infraestructura líder en el mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-purple-300">
                <i className="bx bx-check-circle text-xl"></i>
                <span className="font-semibold">Infraestructura Escalable</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <i className="bx bx-check-circle text-xl"></i>
                <span className="font-semibold">Seguridad Empresarial</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <i className="bx bx-check-circle text-xl"></i>
                <span className="font-semibold">Soporte 24/7</span>
              </div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-semibold">
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
