import { PaletteMode } from '@mui/material'
import { createTheme as createMuiTheme } from '@mui/material/styles'

export function createTheme(paletteMode: PaletteMode) {
  return createMuiTheme({
    palette: {
      mode: paletteMode,
    },
  })
}

const defaultTheme = createTheme('light')

export default defaultTheme
