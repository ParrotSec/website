import React, { PropsWithChildren } from 'react'
import { Link as RouterLink } from '@reach/router'
import { Box, Button, makeStyles, Paper } from '@material-ui/core'
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
    borderRadius: 6
  },
  button: {
    textTransform: 'none',
    color: '#05EEFF',
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    borderRadius: 10
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
      <Box component="h3" fontWeight="bold" fontSize={28} marginTop="20px" marginBottom={0}>
        {title}
      </Box>
      <Box
        fontWeight="normal"
        color="rgba(255, 255, 255, 0.5)"
        marginTop="20px"
        marginBottom="25px"
      >
        {children}
      </Box>
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
