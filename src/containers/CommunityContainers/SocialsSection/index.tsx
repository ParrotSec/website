import React from 'react'
import { Box, Grid, GridProps, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import PFeatureBlock from 'components/PFeatureBlock'
import HackTheBox from './assets/hackthebox.svg'
import Forum from './assets/forum.svg'
import Discord from './assets/discord.svg'
import Instagram from './assets/instagram.svg'
import LinkedIn from './assets/linkedin.svg'
import Twitch from './assets/twitch.svg'
import Twitter from './assets/twitter.svg'
import Facebook from './assets/facebook.svg'
import YouTube from './assets/youtube.svg'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  paper: {
    width: '100%',
    padding: theme.spacing(8),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4)
    }
  },
  icon: {
    fill: theme.palette.type === 'dark' ? '#FFFFFF' : '#06043E'
  },
  iconWrapper: {
    marginTop: theme.spacing(6),
    gap: theme.spacing(4)
  }
}))

const SocialsSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <>
      <Grid {...props} container item xs={12} md={9} spacing={4} justifyContent="center">
        <Grid item sm={12} lg={4}>
          <PFeatureBlock
            title="Forum"
            Icon={Forum}
            buttonText="Explore Forum"
            buttonLink="https://community.parrotsec.org"
            outLink
          >
            Our tools are designed to be compatible with as many devices as possible via
            containerization technologies like Docker or Podman.
          </PFeatureBlock>
        </Grid>
        <Grid item sm={12} lg={4}>
          <PFeatureBlock
            title="Parrot + HTB"
            Icon={HackTheBox}
            buttonText="Explore Colab"
            buttonLink="https://www.hackthebox.eu/blog/pwnbox-parrot"
            outLink
          >
            Our tools are designed to be compatible with as many devices as possible via
            containerization technologies like Docker or Podman.
          </PFeatureBlock>
        </Grid>
        <Grid item sm={12} lg={4}>
          <PFeatureBlock
            title="Discord"
            Icon={Discord}
            buttonText="Join Discord"
            buttonLink="https://discord.com"
            outLink
          >
            Our tools are designed to be compatible with as many devices as possible via
            containerization technologies like Docker or Podman.
          </PFeatureBlock>
        </Grid>
      </Grid>
      <Grid className={classes.grid} item container xs={12} md={9}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container alignItems="center" direction="column">
            <Typography variant="h3" paragraph>
              Join Us On Social Media
            </Typography>
            <Typography variant="subtitle2">
              Choose the channel that you are most active in and let’s stay connected!
            </Typography>
          </Grid>
          <Box
            className={classes.iconWrapper}
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
          >
            <IconButton>
              <Instagram className={classes.icon} />
            </IconButton>
            <IconButton>
              <Twitter className={classes.icon} />
            </IconButton>
            <IconButton>
              <Facebook className={classes.icon} />
            </IconButton>
            <IconButton>
              <LinkedIn className={classes.icon} />
            </IconButton>
            <IconButton>
              <YouTube className={classes.icon} />
            </IconButton>
            <IconButton>
              <Twitch className={classes.icon} />
            </IconButton>
          </Box>
        </Paper>
      </Grid>
    </>
  )
}

export default SocialsSection
