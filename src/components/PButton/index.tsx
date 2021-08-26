import React from 'react'
import { Button, ButtonProps, makeStyles } from '@material-ui/core'
import cls from 'classnames'
import { Link as RouterLink } from '@reach/router'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 85,
    minWidth: 165,
    textTransform: 'none',
    fontSize: 14,
    paddingTop: 11,
    paddingBottom: 11,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  gradient: {
    background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 0 30px 10px #2c2981'
    }
  },
  outlined: {
    borderColor: 'white'
  },
  text: {},
  contained: {
    color: 'rgba(0, 0, 0, 0.87)'
  }
}))

type PButtonProps = {
  gradient?: boolean
} & ButtonProps

const PButton = ({
  className,
  children,
  gradient = false,
  variant,
  startIcon,
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
      startIcon={startIcon}
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
