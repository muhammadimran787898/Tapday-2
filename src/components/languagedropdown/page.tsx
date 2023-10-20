'use client'

import * as React from 'react'

export default function DropLanguage() {
  return (
    <div className="relative inline-block text-left">
      <select
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none"
        name="language"
        id="language"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        {/* Add more options as needed */}
      </select>
      {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"> */}
      {/* <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg> */}
      {/* </div> */}
    </div>
  )
}
