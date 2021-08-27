import React, { PropsWithChildren } from 'react'
import { Link as RouterLink } from '@reach/router'
import { Link, makeStyles, Paper, Typography } from '@material-ui/core'
import Arrow from './assets/vector.svg'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 24,
    padding: 32,
    height: '100%'
  },
  icon: {
    padding: 16,
    background: 'white',
    borderRadius: 6,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      padding: 8
    },
    ...(theme.palette.type === 'light'
      ? {
          filter: 'invert() saturate(0)'
        }
      : {})
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
  '.arrow': {
    fill: theme.palette.type === 'light' ? '#03232E' : '#05EEFF'
  }
}))

type PFeatureBlockProps = PropsWithChildren<{
  icon: string
  title: string
  buttonText: string
  buttonLink: string
}>

const PFeatureBlock = ({ children, icon, title, buttonText, buttonLink }: PFeatureBlockProps) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root} elevation={0}>
      <img className={classes.icon} src={icon} alt="Icon" />
      <Typography variant="h3">{title}</Typography>
      <Typography className={classes.body} variant="body1">
        {children}
      </Typography>
      <Link className={classes.button} component={RouterLink} to={buttonLink}>
        {buttonText} <img src={Arrow} alt="Navigation Arrow" />
      </Link>
    </Paper>
  )
}

export default PFeatureBlock
