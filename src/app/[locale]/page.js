'use client'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('home')

  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="text-xl mt-4">{t('description')}</p>
    </main>
  )
}