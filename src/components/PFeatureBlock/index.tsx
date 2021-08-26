import React, { PropsWithChildren } from 'react'
import { Link as RouterLink } from '@reach/router'
import { Button, makeStyles, Paper, Typography } from '@material-ui/core'
import Arrow from './assets/vector.svg'

const useStyles = makeStyles({
  root: {
    borderRadius: 24,
    padding: 32,
    height: '100%'
  },
  iconHolder: {
    height: 64,
    width: 64,
    background: 'white',
    borderRadius: 6
  },
  icon: {
    padding: 16,
    background: 'white',
    borderRadius: 6,
    marginBottom: 20
  },
  button: {
    textTransform: 'none',
    color: '#05EEFF',
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    borderRadius: 10
  },
  body: {
    marginTop: 20,
    marginBottom: 25
  }
})

type PFeatureBlockProps = PropsWithChildren<{
  icon: string
  title: string
  buttonText: string
  buttonLink: string
}>

const PFeatureBlock = ({ children, icon, title, buttonText, buttonLink }: PFeatureBlockProps) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <img className={classes.icon} src={icon} alt="Icon" />
      <Typography variant="h3">{title}</Typography>
      <Typography className={classes.body} variant="body1">
        {children}
      </Typography>
      <Button
        className={classes.button}
        component={RouterLink}
        to={buttonLink}
        endIcon={<img src={Arrow} alt="Navigation Arrow" />}
      >
        {buttonText}
      </Button>
    </Paper>
  )
}

export default PFeatureBlock
