import { decomposeColor } from '@mui/material'
import { recomposeColor } from '@mui/system'

const gradientOffset = (anyColor: string): string => {
  const color = decomposeColor(anyColor)
  color.values[0] -= 5
  color.values[1] += 17
  color.values[2] -= 15

  return recomposeColor(color)
}

export default gradientOffset
