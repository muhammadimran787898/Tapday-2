'use client'
import './globals.css'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'

import Providers from './provider'

import MainNav from 'components/ui/menubar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
 

  return (
    <html>
      <body>
        <Providers>
         
          <I18nProvider i18n={i18n}>{children}</I18nProvider>
        </Providers>
      </body>
    </html>
  )
}
