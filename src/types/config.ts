type BaseInput = {
  label: string
  variableName: string
}

type ColorInput = BaseInput & {
  type: 'color'
}

export type ConfigInput = ColorInput
