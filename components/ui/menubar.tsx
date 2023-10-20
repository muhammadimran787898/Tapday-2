'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import DropLanguage from 'src/components/languagedropdown/page'

export default function MainNav() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact Us', path: '/home' }
  ]

  return (
    <nav className=" w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-slate-300">Logo</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-slate-400">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            {/* <form className="flex items-center  space-x-2 border rounded-md p-2">
              <Search className="h-5 w-5 flex-none text-gray-300" />
              <input
                className="w-full outline-none appearance-none placeholder-wihite-500 text-gray-600 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form> */}
          </ul>
        </div>
        <span>
          <DropLanguage />
        </span>
        <span className="flex justify-end ">
          <ModeToggle />
        </span>
      </div>
    </nav>
  )
}
