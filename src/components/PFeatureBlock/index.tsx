import React, { PropsWithChildren } from 'react'
import { Link as RouterLink } from '@reach/router'
import { Button, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    borderRadius: 24
  },
  iconHolder: {
    height: 64,
    width: 64
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
      <div className={classes.iconHolder}>{icon}</div>
      <Typography variant="h3">{title}</Typography>

      <Typography variant="body1">{children}</Typography>
      <Button component={RouterLink} to={buttonLink}>
        {buttonText}
      </Button>
    </Paper>
  )
}

export default PFeatureBlock
