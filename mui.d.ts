/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from '@mui/material'

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/Typography' {
  interface TypographyVariants {
    body1Semi: React.CSSProperties
    body2Semi: React.CSSProperties
    subtitle1Semi: React.CSSProperties
    subtitle2Semi: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    body1Semi?: React.CSSProperties
    body2Semi?: React.CSSProperties
    subtitle1Semi?: React.CSSProperties
    subtitle2Semi?: React.CSSProperties
  }
  interface TypographyPropsVariantOverrides {
    body1Semi: true
    body2Semi: true
    subtitle1Semi: true
    subtitle2Semi: true
  }
}
