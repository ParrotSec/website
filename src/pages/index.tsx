import React from 'react'
import OSSelector from 'components/OSSelector'
import { Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import { WbIncandescent as Bulb } from '@material-ui/icons'
import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
    fontSize: 30
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid item container xs={10} justifyContent="center" alignItems="center" direction="column">
        <Box
          fontWeight={300}
          color="#05EEFF"
          letterSpacing="0.1em"
          textAlign="center"
          style={{ textTransform: 'uppercase' }}
        >
          <span style={{ fontWeight: 'bold' }}>Parrot</span>OS
        </Box>
        <Box
          component="h1"
          marginTop={0}
          marginBottom="10px"
          fontWeight="bold"
          textAlign="center"
          fontSize={72}
          lineHeight="86px"
        >
          The operating <br /> system for{' '}
          <span
            style={{
              color: '#05EEFF'
            }}
          >
            Hackers <span style={{ fontWeight: 'lighter' }}>|</span>
          </span>
        </Box>
        <Box
          component="h6"
          fontWeight={400}
          textAlign="center"
          fontSize={18}
          marginTop="27px"
          color="rgba(255, 255, 255, 0.5);"
        >
          A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
        </Box>
        <Box display="flex" marginBottom="45px" style={{ gap: 32 }}>
          <PButton variant="contained" to="/download" gradient>
            Download OS
          </PButton>
          <PButton variant="outlined" to="/docs">
            Getting Started
          </PButton>
        </Box>
        <PButton
          variant="outlined"
          to="/docs"
          startIcon={Bulb}
          style={{
            padding: '21px 87px',
            border: '1px solid rgba(255, 255, 255, 0.5)'
          }}
        >
          <Bulb style={{ marginRight: 5 }} /> What`s new in Parrot OS 4.32.1
        </PButton>
      </Grid>
      {/* Nevermind about the bottom */}
      <Grid container xs={6}>
        <Typography className={classes.title} variant="h1">
          Download Parrot 4.11.2
        </Typography>
      </Grid>
      <Divider />
      <OSSelector />
      <h1>
        Welcome to React-Static <br /> + TypeScript
      </h1>
      <p>
        Learn <a href="https://github.com/sw-yx/react-typescript-cheatsheet">React + TypeScript</a>
      </p>
      <p>
        <a href="https://twitter.com/swyx">Report issues with this template</a>
      </p>
    </Grid>
  )
}

export default Index
