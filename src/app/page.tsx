'use client'

import { useLingui } from '@lingui/react'
import { t } from '@lingui/macro'

const HomeComponent = () => {
  const { i18n } = useLingui()
  return <p>{i18n._(t`how to become rich.`)}</p>
}

export default HomeComponent
