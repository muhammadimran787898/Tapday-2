'use client'
import './globals.css'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

import { messages as enMessages } from '../../locale/cs/messages'
import { messages as csMessages } from '../../locale/cs/messages'
import { useEffect, useState } from 'react'

import Providers from './provider'
import ThemeSwitcher from './ThemeSwitcher'

import { ModeToggle } from 'components/ui/mode-toggle'
import MainNav from 'components/ui/menubar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [locale, setLocale] = useState('en')
  useEffect(() => {
    i18n.load({
      en: enMessages,
      cs: csMessages
    })
    i18n.activate(locale)
  }, [locale])

  return (
    <html>
      <body>
        <Providers>
          <MainNav />
          

          <button
            style={{ fontFamily: 'CustomFont' }}
            className=""
            onClick={() => setLocale(locale == 'en' ? 'cs' : 'en')}
          ></button>
          <I18nProvider i18n={i18n}>{children}</I18nProvider>
          {/* <ThemeSwitcher /> */}
        </Providers>
      </body>
    </html>
  )
}
