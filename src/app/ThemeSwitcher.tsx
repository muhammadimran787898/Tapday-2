'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
// import { Switch } from ''
// import { Label } from '@/components/ui/label'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <div className="flex items-center space-x-2">
        {/* <Switch id="airplane-mode" /> */}
        {/* <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
      </div>
      <br />
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <br />
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default ThemeSwitcher
