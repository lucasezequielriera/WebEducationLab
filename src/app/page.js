'use client'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">{t('home.title')}</h1>
        <p className="text-xl mt-4 text-gray-600">{t('home.description')}</p>
        <button 
          onClick={toggleLang} 
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
        >
          {i18n.language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
        </button>
      </header>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800">{t('home.cta')}</h2>
        <p className="text-lg mt-4 text-gray-600">{t('home.subtext')}</p>
      </section>

      <section className="text-center mb-16">
        <h3 className="text-2xl font-semibold text-gray-800">{t('home.featuresTitle')}</h3>
        <ul className="list-disc list-inside mt-4 text-lg text-gray-600">
          <li>{t('home.feature1')}</li>
          <li>{t('home.feature2')}</li>
          <li>{t('home.feature3')}</li>
        </ul>
      </section>

      <section className="flex justify-center gap-8">
        <Link 
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {t('home.login')}
        </Link>
        <Link 
          href="/register"
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          {t('home.register')}
        </Link>
      </section>
    </div>
  )
}
