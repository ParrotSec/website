import React, { ElementType, ReactNode } from 'react'
import { Link as RouterLink } from '@reach/router'
import { Link, makeStyles, Paper, PaperProps, Typography } from '@material-ui/core'
import Arrow from './assets/vector.svg'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 24,
    padding: 32
  },
  icon: {
    fill: theme.palette.type === 'light' ? '#FFFFFF' : '#06043E'
  },
  iconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.type === 'light' ? '#03232E' : '#FFFFFF',
    borderRadius: 6,
    marginBottom: 20
  },
  button: {
    textTransform: 'none',
    color: theme.palette.type === 'light' ? '#03232E' : '#05EEFF',
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    borderRadius: 10
  },
  body: {
    marginTop: 20,
    marginBottom: 25
  },
  arrow: {
    fill: theme.palette.type === 'light' ? '#03232E' : '#05EEFF'
  }
}))

type PFeatureBlockProps = {
  Icon: ElementType
  title: string
  buttonText?: string
  buttonLink?: string
  outLink?: boolean
  CustomFooter?: ReactNode
} & PaperProps

const PFeatureBlock = ({
  children,
  Icon,
  title,
  buttonText,
  buttonLink,
  CustomFooter,
  outLink,
  ...rest
}: PFeatureBlockProps) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root} elevation={0} {...rest}>
      <div className={classes.iconWrapper}>
        <Icon className={classes.icon} />
      </div>
      <Typography variant="h3">{title}</Typography>
      <Typography className={classes.body} variant="body1">
        {children}
      </Typography>
      {CustomFooter ??
        (outLink ? (
          <Link className={classes.button} href={buttonLink}>
            {buttonText} <Arrow className={classes.arrow} />
          </Link>
        ) : (
          <Link className={classes.button} component={RouterLink} to={buttonLink}>
            {buttonText} <Arrow className={classes.arrow} />
          </Link>
        ))}
    </Paper>
  )
}

export default PFeatureBlock
