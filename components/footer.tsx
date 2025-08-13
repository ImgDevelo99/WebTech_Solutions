export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2024 WebTech_Solutions. Expertos en Soluciones Digitales.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="bx bxl-linkedin-square text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              aria-label="Twitter"
              title="Twitter"
            >
              <i className="bx bxl-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
