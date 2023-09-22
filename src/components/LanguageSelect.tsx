'use client';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const LANG_TO_COUNTRY = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  ro: 'Română',
  ru: 'Русский',
  vi: 'Tiếng Việt',
  zh_CN: '简体中文',
  zh_TW: '繁體中文',
  ko: '한국어',
  ja: '日本語',
  fa: 'فارسی',
  pt_BR: 'Português',
  hi: 'हिन्दी',
  cs: 'Español'
};

export default function LanguageSelect() {
  // const { locale, locales, asPath } = useRouter();
  // const { locale, locales, asPath } = useParams();
  const asPath = usePathname();

  return (
    <Menu as="div" className="relative inline-block text-right">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="text-primary border-dark-800 hover:bg-dark-900 focus:ring-offset-dark-700 focus:ring-dark-800 inline-flex w-full justify-center rounded border bg-transparent px-4 py-2 text-sm font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
              {/* <Image
                className="mr-1 inline h-3 w-3 align-middle"
                src={`/images/flags/${locale}-flag.png`}
                width={20}
                height={20}
                alt={''}
                aria-hidden="true"
              /> */}
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="divide-dark-600 bg-dark-800 absolute right-0 mt-2 w-[max-content] origin-top-right divide-y rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="rounded-md border border-gray-400 bg-white p-2">
                {['en', 'cs'].map((locale) => {
                  return (
                    <Menu.Item key={locale}>
                      {({ active }) => (
                        <Link href={asPath} locale={locale}>
                          <div
                            className={`
                               ${active ? 'bg-dark-700 text-high-emphesis' : 'text-primary'}
                                'hover:bg-dark-700 focus:bg-dark-700 font-bold' group flex items-center rounded p-2 text-sm
                             `}
                            // onClick={() => cookieCutter.set('NEXT_LOCALE', locale)}
                          >
                            {/* <Image
                              className="mr-1 inline h-3 w-3 align-middle"
                              src={`/images/flags/${locale}-flag.png`}
                              width={20}
                              height={20}
                              alt={locale}
                              aria-hidden="true"
                            /> */}
                            <span className="ml-2">{locale}</span>
                          </div>
                        </Link>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
