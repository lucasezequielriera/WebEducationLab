'use client'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function Home() {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-green-300 animate-gradient">

      {/* Language Button (Placed in top-left corner) */}
      <button 
        onClick={toggleLang} 
        className="absolute top-8 left-8 text-white bg-blue-600 rounded-full p-2 z-10 hover:bg-blue-700 transition-all ease-in-out"
      >
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </button>

      {/* Hero Section */}
      <header className="flex justify-center items-center h-screen bg-opacity-80 text-center mb-16 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-500 via-green-500 to-teal-400 opacity-50 z-0"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-7xl font-extrabold mb-8 tracking-tight">{t('home.title')}</h1>
          <p className="text-2xl sm:text-3xl mb-8">{t('home.description')}</p>
          <div className="flex justify-center gap-8">
            <Link href="/login" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ease-in-out">
              {t('home.login')}
            </Link>
            <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all ease-in-out">
              {t('home.register')}
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="text-center mb-24">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-6">{t('home.featuresTitle')}</h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="bg-white p-8 rounded-xl shadow-xl w-[300px] hover:scale-105 transform transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800">{t('home.feature1')}</h3>
            <p className="text-gray-600 mt-2">{t('home.feature1Desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl w-[300px] hover:scale-105 transform transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800">{t('home.feature2')}</h3>
            <p className="text-gray-600 mt-2">{t('home.feature2Desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl w-[300px] hover:scale-105 transform transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800">{t('home.feature3')}</h3>
            <p className="text-gray-600 mt-2">{t('home.feature3Desc')}</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="text-center mb-24">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-6">{t('home.pricingTitle')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-8 rounded-xl shadow-xl w-[320px] hover:scale-105 transform transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800">{t('home.planBasic')}</h3>
            <p className="text-gray-600 mt-2">{t('home.planBasicDesc')}</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">$19/month</p>
            <Link href="/register" className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ease-in-out">
              {t('home.getStarted')}
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl w-[320px] hover:scale-105 transform transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800">{t('home.planPro')}</h3>
            <p className="text-gray-600 mt-2">{t('home.planProDesc')}</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">$39/month</p>
            <Link href="/register" className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ease-in-out">
              {t('home.getStarted')}
            </Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl w-[320px] hover:scale-105 transform transition-all duration-500">
            <h3 className="text-2xl font-semibold text-gray-800">{t('home.planEnterprise')}</h3>
            <p className="text-gray-600 mt-2">{t('home.planEnterpriseDesc')}</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">$99/month</p>
            <Link href="/register" className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ease-in-out">
              {t('home.getStarted')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 p-10 text-center mb-24">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">{t('home.testimonialsTitle')}</h2>
        <div className="flex justify-center gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[250px]">
            <p className="text-gray-600 mb-4">"Una plataforma increíble para aprender de forma interactiva. ¡Recomendada al 100%!"</p>
            <p className="text-lg font-semibold text-gray-800">Juan Pérez</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-[250px]">
            <p className="text-gray-600 mb-4">"Excelente contenido, fácil de seguir y muy útil para mejorar mis habilidades técnicas."</p>
            <p className="text-lg font-semibold text-gray-800">María López</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">{t('home.ctaTitle')}</h2>
        <p className="text-lg sm:text-xl text-gray-600 mt-4 mb-8">{t('home.ctaDescription')}</p>
        <Link href="/register" className="px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ease-in-out">
          {t('home.getStarted')}
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white p-6 text-center">
        <p>&copy; 2025 WebEducationLab - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}
