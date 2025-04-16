import './globals.css'
import I18nextProviderWrapper from './i18n/I18nextProviderWrapper'

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
  ]
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body>
        <I18nextProviderWrapper>
          {children}
        </I18nextProviderWrapper>
      </body>
    </html>
  )
}
