export default function RetailSection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Retail Technology Solutions"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-700/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lime-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-white">Retail</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Descubre soluciones tecnológicas de vanguardia diseñadas para ofrecer un valor excepcional. Mejora las
              experiencias de los clientes, agiliza las operaciones y lidera el competitivo mundo del Retail.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-green-400">
                <i className="bx bx-check-circle text-xl"></i>
                <span className="font-semibold">Experiencias de Cliente</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <i className="bx bx-check-circle text-xl"></i>
                <span className="font-semibold">Operaciones Ágiles</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <i className="bx bx-check-circle text-xl"></i>
                <span className="font-semibold">Liderazgo Competitivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
