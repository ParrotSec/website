import { useEffect, useRef, useState } from 'react'
import { Box, Grid, SvgIcon, Typography } from '@mui/material'
import useTypewriter from 'react-typewriter-hook'
import PButton from 'components/PButton'
import Bulb from './assets/Bulb.svg'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  headingSubTitle: {
    marginTop: theme.spacing(1),
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  hackers: {
    color: theme.palette.primary.main,
    [theme.breakpoints.up(1203)]: {
      backgroundImage: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
      backgroundSize: '100%',
      backgroundRepeat: 'repeat',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      '-moz-background-clip': 'text',
      '-moz-text-fill-color': 'transparent'
    }
  },
  cursor: {
    color: theme.palette.primary.main,
    fontWeight: 100,
    marginLeft: '-0.1rem',
    [theme.breakpoints.up(1203)]: {
      color: '#00FFF0'
    }
  },
  wideButton: {
    marginTop: 45,
    padding: '21px 87px',
    border: `1px solid ${
      theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(3, 35, 46, 0.5)'
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
    fill: theme.palette.mode === 'light' ? '#262626' : '#FFFFFF'
  }
}))

const typeData = ['Hackers', 'Security specialists', 'Developers', 'Sysadmins', 'Network engineers']
let index = 0

const RunningText = () => {
  const classes = useStyles()
  const [magicName, setMagicName] = useState(typeData[0])

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const name = useTypewriter(magicName)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > typeData.length ? 0 : ++index
      setMagicName(typeData[index])
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [magicName])

  return (
    <Typography variant="h1" align="center" paragraph>
      The operating <br /> system for <span className={classes.hackers}>{name}</span>
      <span className={classes.cursor}>|</span>
    </Typography>
  )
}

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
      <RunningText />
      <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
        A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
      </Typography>
      <Grid container item xs={12} spacing={2}>
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
