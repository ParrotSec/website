import React from 'react'
import { Pace, Pause, WindupChildren } from 'windups'
import randomInteger from 'random-int'
import OSSelector from 'components/OSSelector'
import { Box, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import PButton from 'components/PButton'
import Wallpaper from './../../assets/wallpaper.png'
import PFeatureBlock from 'components/PFeatureBlock'
import Bulb from '../../assets/icons/Bulb.svg'
import Build from '../../assets/icons/Build.svg'
import Layout from '../../assets/icons/Layout.svg'
import Safety from '../../assets/icons/SafetyCertificate.svg'
import Unlock from '../../assets/icons/Unlock.svg'
import Vector from '../../assets/icons/Vector.svg'
import WeChat from '../../assets/icons/Wechat.svg'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
    fontSize: 30
  },
  hackersSpan: {
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    background: ' linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%);'
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100vw',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper}')`
  },
  features: {
    marginTop: 130
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <div className={classes.wallpaper} />
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
          The operating <br /> system for
          <WindupChildren>
            <Pause ms={1000} />
            <Pace
              getPace={char => (char === ' ' ? randomInteger(100, 300) : randomInteger(40, 80))}
            >
              <span className={classes.hackersSpan}>
                {' '}
                Hackers<span style={{ fontWeight: 100 }}>|</span>
              </span>
            </Pace>
          </WindupChildren>
          <span style={{ fontWeight: 100, marginLeft: '-1rem', color: '#00FFF0' }}>|</span>
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
          startIcon={<img src={Bulb} alt="Bulb" />}
          style={{
            padding: '21px 87px',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: 24
          }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What's new in Parrot OS 4.32.1
        </PButton>
      </Grid>
      <Grid className={classes.features} container spacing={4} justifyContent="center">
        <Grid container item xs={9} spacing={4}>
          <Grid item xs>
            <PFeatureBlock
              title="Secure System"
              icon={Safety}
              buttonText="Learn about Parrot’s security"
              buttonLink="/docs"
            >
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </Grid>
          <Grid item xs>
            <PFeatureBlock
              title="Portable"
              icon={Build}
              buttonText="Learn about Parrot’s portability"
              buttonLink="/docs"
            >
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </Grid>
          <Grid item xs>
            <PFeatureBlock
              title="Performance"
              icon={Vector}
              buttonText="Learn about Parrot’s performance"
              buttonLink="/docs"
            >
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </Grid>
        </Grid>
        <Grid container item xs={9} spacing={4}>
          <Grid item xs>
            <PFeatureBlock
              title="Privacy First"
              icon={Unlock}
              buttonText="Learn about Parrot’s security"
              buttonLink="/docs"
            >
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </Grid>
          <Grid item xs>
            <PFeatureBlock
              title="Customizable"
              icon={Layout}
              buttonText="Learn about Parrot’s security"
              buttonLink="/docs"
            >
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </Grid>
          <Grid item xs>
            <PFeatureBlock
              title="Free & Open Source"
              icon={WeChat}
              buttonText="Learn about Parrot’s security"
              buttonLink="/docs"
            >
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </Grid>
        </Grid>
      </Grid>
      {/* Nevermind about the bottom */}
      <Grid container item xs={6}>
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
