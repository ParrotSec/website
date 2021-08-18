import React from 'react'
import { Button, ButtonProps, makeStyles } from '@material-ui/core'
import cls from 'classnames'
import { Link as RouterLink } from '@reach/router'

const useStyles = makeStyles({
  root: {
    padding: '11px 36px',
    borderRadius: 85,
    textTransform: 'none'
  },
  gradient: {
    background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    backgroundSize: '120%',
    backgroundPosition: 0,
    transition: 'background-position 0.3s ease-in-out',
    '&:hover': {
      backgroundPosition: -30
    }
  },
  outlined: {
    borderColor: 'white'
  },
  text: {},
  contained: {
    color: 'rgba(0, 0, 0, 0.87)'
  }
})

type PButtonProps = {
  gradient?: boolean
} & ButtonProps

const PButton = ({
  className,
  children,
  gradient = false,
  variant,
  to,
  style
}: PButtonProps & { to: string }) => {
  const classes = useStyles()
  return (
    <Button
      className={cls(
        classes.root,
        className,
        ...(gradient ? [classes.gradient] : []),
        classes[variant]
      )}
      component={RouterLink}
      to={to}
      variant={variant}
      style={style}
    >
      {children}
    </Button>
  )
}

export default PButton
