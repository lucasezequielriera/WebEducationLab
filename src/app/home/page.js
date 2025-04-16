'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 animate-gradient">
      {/* Hero Section */}
      <section className="text-center p-12 sm:p-20 md:p-24 w-full bg-opacity-70">
        <h1 className="text-5xl sm:text-6xl font-semibold text-white mb-6 tracking-tight">
          Bienvenido a WebEducationLab
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8">
          Aprende con cursos interactivos, accede desde cualquier dispositivo y mejora tus habilidades con nosotros.
        </p>
        <button 
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-80 transition-all ease-in-out"
        >
          ¡Comienza hoy mismo!
        </button>
      </section>

      {/* Features Section */}
      <section className="w-full p-10 sm:p-16 bg-white shadow-xl rounded-t-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-10">
          Características que te encantarán
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="p-6 rounded-full bg-gradient-to-r from-green-300 to-green-500 shadow-xl mb-4">
              <Image src="/icon-1.svg" alt="Icono de cursos interactivos" width={50} height={50} />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Cursos Interactivos</h3>
            <p className="text-gray-600">Aprende a tu propio ritmo con contenido interactivo y práctico.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl mb-4">
              <Image src="/icon-2.svg" alt="Icono de certificación" width={50} height={50} />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Certificados al Completar</h3>
            <p className="text-gray-600">Obtén un certificado profesional al completar los cursos con éxito.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="p-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 shadow-xl mb-4">
              <Image src="/icon-3.svg" alt="Icono de accesibilidad" width={50} height={50} />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Accesibilidad en cualquier dispositivo</h3>
            <p className="text-gray-600">Accede a nuestros cursos desde cualquier dispositivo y en cualquier momento.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white p-10 text-center">
        <p>&copy; 2025 WebEducationLab - Todos los derechos reservados</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-gray-300 hover:text-white">Sobre nosotros</a>
          <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
        </div>
      </footer>
    </div>
  )
}
