import React from 'react'
import { Box, Grid, makeStyles, SvgIcon, Typography } from '@material-ui/core'
import { Pace, Pause, WindupChildren } from 'windups'
import randomInteger from 'random-int'
import PButton from 'components/PButton'
import Bulb from './assets/Bulb.svg'

const useStyles = makeStyles(theme => ({
  headingTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(7)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(5)
    }
  },
  headingSubTitle: {
    marginTop: 27,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  hackers: {
    background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  wideButton: {
    marginTop: 45,
    padding: '21px 87px',
    border: `1px solid ${
      theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(3, 35, 46, 0.5)'
    }`,
    borderRadius: 24,
    [theme.breakpoints.down('sm')]: {
      padding: '21px 30px'
    }
  },
  responsiveJustify: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  bulb: {
    fill: theme.palette.type === 'light' ? '#262626' : '#FFFFFF'
  }
}))

const WelcomeSection = () => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      xs={10}
      justifyContent="center"
      alignItems="center"
      direction="column"
      wrap="nowrap"
    >
      <Box
        fontWeight={300}
        color="#05EEFF"
        letterSpacing="0.1em"
        textAlign="center"
        style={{ textTransform: 'uppercase' }}
      >
        <span style={{ fontWeight: 'bold' }}>Parrot</span>OS
      </Box>
      <Typography className={classes.headingTitle} variant="h1" align="center">
        The operating <br /> system for{' '}
        <WindupChildren>
          <Pause ms={3000} />
          <Pace getPace={char => (char === ' ' ? randomInteger(100, 300) : randomInteger(40, 80))}>
            <Box display="inline-block" className={classes.hackers}>
              Hackers
            </Box>
          </Pace>
        </WindupChildren>
        <span style={{ fontWeight: 100, marginLeft: '-0.1rem', color: '#00FFF0' }}>|</span>
      </Typography>

      <Typography className={classes.headingSubTitle} variant="body1" align="center">
        A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
      </Typography>
      <Grid container item xs={12} spacing={4}>
        <Grid
          className={classes.responsiveJustify}
          container
          item
          xs={12}
          sm={6}
          justifyContent="flex-end"
        >
          <PButton variant="contained" to="/download" gradient>
            Download OS
          </PButton>
        </Grid>
        <Grid className={classes.responsiveJustify} container item xs={12} sm={6}>
          <PButton variant="outlined" to="/docs">
            Getting Started
          </PButton>
        </Grid>
      </Grid>
      <PButton
        className={classes.wideButton}
        variant="outlined"
        to="/docs"
        startIcon={<SvgIcon className={classes.bulb} component={Bulb} />}
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        What's new in Parrot OS 4.32.1
      </PButton>
    </Grid>
  )
}

export default WelcomeSection
