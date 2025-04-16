import './globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { locales } from '../i18n'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default function RootLayout({ children, params }) {
  const messages = useMessages()

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}