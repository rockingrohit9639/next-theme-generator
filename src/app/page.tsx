'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="mt-16 min-h-screen p-4">
      <div className="flex items-center justify-end">
        <Button
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          {theme === 'light' ? <MoonIcon className="mr-2 h-4 w-4" /> : <SunIcon className="mr-2 h-4 w-4" />}
          <span>Toggle Theme</span>
        </Button>
      </div>
    </main>
  )
}
