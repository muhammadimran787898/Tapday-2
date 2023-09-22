'use client';

import LanguageSelect from '@/components/LanguageSelect';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/macro';

const HomeComponent = () => {
  const { i18n } = useLingui();

  return (
    <div>
      <LanguageSelect />
      {i18n._(t`Easily deploy Smart Contracts for any Token right from your
                    browser.`)}
    </div>
  );
};

export default HomeComponent;
