import { Link, Paper, PaperProps, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ElementType, ReactNode } from 'react'

/* import Arrow from './assets/arrow.svg' */

import NextLink from 'components/NextLink'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 24,
    padding: 32,
    height: '100%'
  },
  icon: {
    fill: theme.palette.mode === 'light' ? '#FFFFFF' : '#06043E',
    width: 32,
    height: 32
  },
  iconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF',
    borderRadius: 6,
    marginBottom: 20
  },
  button: {
    textTransform: 'none',
    color: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    borderRadius: 10
  },
  body: {
    display: 'block',
    marginTop: 20
  },
  arrow: {
    fill: theme.palette.mode === 'light' ? '#03232E' : '#05EEFF',
    marginLeft: 8
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
          buttonText?: string
          buttonLink?: string
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
      <Typography variant="h5">{title}</Typography>
      <Typography className={classes.body} variant="body1Semi">
        {children}
      </Typography>
      {CustomFooter ??
        (outLink ? (
          <Link className={classes.button} href={buttonLink}>
            <div>
              {buttonText} {/* <Arrow className={classes.arrow} /> */}
            </div>
          </Link>
        ) : (
          <NextLink className={classes.button} href={buttonLink ?? '/'}>
            <div>
              {buttonText} {/* <Arrow className={classes.arrow} /> */}
            </div>
          </NextLink>
        ))}
    </Paper>
  )
}

export default PFeatureBlock
