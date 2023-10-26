import { cloneElement } from 'react'
import { match } from 'ts-pattern'
import { HslColor, HslColorPicker } from 'react-colorful'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CONFIG_INPUTS } from '@/lib/config'
import { cn } from '@/lib/utils'

type ConfiguratorProps = {
  className?: string
  style?: React.CSSProperties
  trigger: React.ReactElement
}

export default function Configurator({ className, style, trigger }: ConfiguratorProps) {
  const handleChange = (variableName: string, newColor: HslColor) => {
    document.documentElement.style.setProperty(variableName, `${newColor.h} ${newColor.s}% ${newColor.l}%`)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{cloneElement(trigger)}</SheetTrigger>
      <SheetContent className={cn('overflow-y-auto', className)} style={style}>
        <SheetTitle>Theme Configurator</SheetTitle>
        <SheetDescription>Effortlessly craft beautiful themes for your Next.js applications</SheetDescription>

        {CONFIG_INPUTS.map((input) =>
          match(input)
            .returnType<React.ReactNode>()
            .with({ type: 'color' }, ({ label, variableName }) => {
              return (
                <div className="space-y-2">
                  <div className="text-lg">{label}</div>
                  <HslColorPicker
                    onChange={(color) => {
                      handleChange(variableName, color)
                    }}
                  />
                </div>
              )
            })
            .exhaustive(),
        )}
      </SheetContent>
    </Sheet>
  )
}
