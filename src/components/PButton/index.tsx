import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'
import RouterLink from 'next/link'

import gradientOffset from '../../../lib/gradient'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 85,
    minWidth: 165,
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 700,
    paddingTop: 11,
    paddingBottom: 11,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  outlined: {
    color: theme.palette.text.primary,
    borderColor: theme.palette.mode === 'dark' ? 'white' : 'black',
    '&:hover': {
      color: theme.palette.primary.main,
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  },
  text: {},
  contained: {
    color: theme.palette.mode === 'dark' ? '#03232E' : '#FFFFFF',
    background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF'
  },
  gradient: {
    background: `linear-gradient(99.16deg, ${theme.palette.primary.main} 24.01%, ${gradientOffset(
      theme.palette.primary.main
    )} 81.75%)`,
    transition: 'box-shadow 0.3s ease-in-out',
    ...(theme.palette.mode === 'dark'
      ? {
          '&:hover': {
            boxShadow: '0 0 30px 10px #2c2981'
          }
        }
      : {}),
    color: '#03232E'
  }
}))

type PButtonProps = {
  gradient?: boolean
  to?: string
  children: string
} & Omit<ButtonProps, 'children'>

const PButton = ({
  className,
  children,
  gradient = false,
  variant = 'outlined',
  startIcon,
  to,
  style,
  size,
  ...rest
}: PButtonProps) => {
  const classes = useStyles()
  return to ? (
    <RouterLink href={to}>
      <Button
        className={cls(
          classes.root,
          className,
          classes[variant],
          ...(gradient ? [classes.gradient] : [])
        )}
        startIcon={startIcon}
        variant={variant}
        style={style}
        size={size}
        disableElevation
      >
        {children}
      </Button>
    </RouterLink>
  ) : (
    <Button
      className={cls(
        classes.root,
        className,
        classes[variant],
        ...(gradient ? [classes.gradient] : [])
      )}
      startIcon={startIcon}
      variant={variant}
      style={style}
      size={size}
      disableElevation
      {...rest}
    >
      {children}
    </Button>
  )
}

export default PButton
