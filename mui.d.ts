/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from '@mui/material'
import { CSSProperties } from 'react'

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/Typography' {
  interface TypographyVariants {
    body1Semi: CSSProperties
    body2Semi: CSSProperties
    subtitle1Semi: CSSProperties
    subtitle2Semi: CSSProperties
  }
  interface TypographyVariantsOptions {
    body1Semi?: CSSProperties
    body2Semi?: CSSProperties
    subtitle1Semi?: CSSProperties
    subtitle2Semi?: CSSProperties
  }
  interface TypographyPropsVariantOverrides {
    body1Semi: true
    body2Semi: true
    subtitle1Semi: true
    subtitle2Semi: true
  }
}
