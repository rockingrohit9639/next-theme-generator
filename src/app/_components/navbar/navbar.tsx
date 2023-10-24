'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed left-0 top-0 h-16 w-full border-b">
      <div className="bg-background/10 mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 backdrop-blur-md">
        <div>Testing</div>
        <div className="flex items-center gap-2">
          <SunIcon className="h-4 w-4" />
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={() => {
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
          />
          <MoonIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}
