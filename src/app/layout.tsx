'use client'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})
// import { messages } from './locales/en/messages';
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js'
// };
import { messages as enMessages } from '@/locale/en/messages'
import { messages as csMessages } from '@/locale/cs/messages'
import { useEffect, useState } from 'react'
// import { messages as csMessages } from '@';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // i18n.load('en', messages);
  // i18n.activate('en');

  const [locale, setLocale] = useState('en')
  useEffect(() => {
    i18n.load({
      en: enMessages,
      cs: csMessages
    })
    i18n.activate(locale)
  }, [locale])

  return (
    <html lang="en" className={inter.className}>
      <body>
        <button onClick={() => setLocale(locale == 'en' ? 'cs' : 'en')}>
          Hello
        </button>
        <I18nProvider i18n={i18n}>{children}</I18nProvider>
      </body>
    </html>
  )
}