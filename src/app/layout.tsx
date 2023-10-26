'use client'
import './globals.css'
import Providers from './provider'
import MainNav from 'components/ui/menubar'
import { Inter } from 'next/font/google'
import { Locale, i18n } from '@/i18n.config'
import LocaleSwitcher from '@/src/components/LocalSwitcher'
const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Providers>
          <MainNav />
          <LocaleSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  )
}
