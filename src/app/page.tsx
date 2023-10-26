'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import Configurator from './_components/configurator'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="mt-16 min-h-screen p-4">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          {theme === 'light' ? <MoonIcon className="mr-2 h-4 w-4" /> : <SunIcon className="mr-2 h-4 w-4" />}
          <span>Toggle Theme</span>
        </Button>

        <Configurator trigger={<Button>Configure Theme</Button>} />
      </div>
    </main>
  )
}
