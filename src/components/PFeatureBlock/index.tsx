import React, { ElementType, ReactNode } from 'react'
import { Link, makeStyles, Paper, PaperProps, Typography } from '@material-ui/core'
import NextLink from 'components/NextLink'
import Arrow from './assets/arrow.svg'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 24,
    padding: 32,
    height: '100%'
  },
  icon: {
    fill: theme.palette.type === 'light' ? '#FFFFFF' : '#06043E',
    width: 32,
    height: 32
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
  },
  fullHeight: {
    height: '100%'
  }
}))

type PFeatureBlockProps =
  | {
      Icon: ElementType
      title: string
      outLink?: boolean
    } & (
      | {
          CustomFooter: ReactNode
          buttonText?: never
          buttonLink?: never
        }
      | {
          CustomFooter?: never
          buttonText: string
          buttonLink: string
        }
    ) &
      PaperProps

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
            <div>
              {buttonText} <Arrow className={classes.arrow} />
            </div>
          </Link>
        ) : (
          <NextLink className={classes.button} href={buttonLink ?? '/'}>
            <div>
              {buttonText} <Arrow className={classes.arrow} />
            </div>
          </NextLink>
        ))}
    </Paper>
  )
}

export default PFeatureBlock
