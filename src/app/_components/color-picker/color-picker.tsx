import { HslColor, HslColorPicker } from 'react-colorful'
import { useMemo, useState } from 'react'
import invariant from 'tiny-invariant'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

type ColorPickerProps = {
  className?: string
  style?: React.CSSProperties
  defaultColor?: string /** format -> 'h,s,l' */
  onChange?: (newColor: HslColor) => void
}

export default function ColorPicker({ className, style, onChange, defaultColor }: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState<HslColor>({ h: 0, s: 0, l: 0 })

  const initialColor = useMemo(() => {
    if (!defaultColor) {
      return undefined
    }

    const color = defaultColor.split(',').map(Number) as [number, number, number]
    invariant(color.length === 3, 'Invalid default color provided!')

    return {
      h: color[0],
      s: color[1],
      l: color[2],
    }
  }, [defaultColor])

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className="h-6 w-6 rounded border-2"
          style={{ backgroundColor: `hsl(${selectedColor.h}, ${selectedColor.s}%, ${selectedColor.l}%)` }}
        />
      </PopoverTrigger>
      <PopoverContent className={cn('w-max', className)} style={style}>
        <HslColorPicker
          color={initialColor}
          onChange={(color) => {
            setSelectedColor(color)
            onChange?.(color)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
