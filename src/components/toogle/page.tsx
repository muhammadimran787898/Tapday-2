import React, { useState } from 'react'
import 'global.ccs'

function SwitchToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggle = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)
    // You can add code here to switch between dark and light mode
  }

  return (
    <label className={`switch ${isDarkMode ? 'dark' : 'light'}`}>
      <input
        className="switch__input"
        type="checkbox"
        role="switch"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <svg
        className="switch__icon switch__icon--light"
        viewBox="0 0 12 12"
        width="12px"
        height="8px"
        aria-hidden="true"
      >
        {/* Light mode icon SVG */}
      </svg>
      <svg
        className="switch__icon switch__icon--dark"
        viewBox="0 0 12 12"
        width="12px"
        height="12px"
        aria-hidden="true"
      >
        {/* Dark mode icon SVG */}
      </svg>
      <span className="switch__sr">Dark Mode</span>
    </label>
  )
}

export default SwitchToggle
