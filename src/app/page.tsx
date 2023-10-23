'use client'

import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'
import MainNav from 'components/ui/menubar'

import { messages as enMessages } from '../../locale/cs/messages'
import { messages as csMessages } from '../../locale/cs/messages'
import { useEffect, useState } from 'react'

const HomeComponent = () => {
  const { i18n } = useLingui()
  const [locale, setLocale] = useState('en')
  useEffect(() => {
    i18n.load({
      en: enMessages,
      cs: csMessages
    })
    i18n.activate(locale)
  }, [locale])

  return (
    <>
      <div>
        <MainNav />

        <button
          style={{ fontFamily: 'CustomFont' }}
          className=""
          onClick={() => setLocale(locale == 'en' ? 'cs' : 'en')}
        ></button>

        <p>{i18n._(t`how to become rich.`)}</p>
      </div>
    </>
  )
}

export default HomeComponent
