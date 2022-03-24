import Telegram from '@mui/icons-material/Telegram'
import { Box, Grid, GridProps, IconButton, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Discord from './assets/discord.svg'
import Facebook from './assets/facebook.svg'
import Forum from './assets/forum.svg'
import HackTheBox from './assets/hackthebox.svg'
import Instagram from './assets/instagram.svg'
import LinkedIn from './assets/linkedin.svg'
/* import Twitch from './assets/twitch.svg' */
import Twitter from './assets/twitter.svg'
/* import YouTube from './assets/youtube.svg' */

import PFeatureBlock from 'components/PFeatureBlock'

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(8),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4)
    }
  },
  icon: {
    fill: theme.palette.mode === 'dark' ? '#FFFFFF' : '#06043E'
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
            An awesome community is one click away. Receive assistence, share ideas and follow the
            development of the project.
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
            Hackers love Pwnbox and Parrot OS. More and more people are using the free Debian
            Linux-based cybersecurity and penetration testing operating systems every day.
          </PFeatureBlock>
        </Grid>
        <Grid item sm={12} lg={4}>
          <PFeatureBlock
            title="Telegram"
            Icon={Telegram}
            buttonText="Join Telegram"
            buttonLink="https://t.me/parrotsecgroup"
            outLink
          >
            The Parrot Project is a community-driven opensource project, and a gateway to spread
            innovative ideas born inside it&apos;s community. Join in our official Telegram Group!
          </PFeatureBlock>
        </Grid>
      </Grid>
      <Grid item container xs={12} md={9}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container alignItems="center" direction="column">
            <Typography variant="h5" paragraph>
              Join Us On Social Media
            </Typography>
            <Typography variant="subtitle2Semi">
              Choose the channel that you are most active in and let’s stay connected!
            </Typography>
          </Grid>
          <Box
            className={classes.iconWrapper}
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
          >
            <IconButton href="https://www.instagram.com/parrotproject/">
              <Instagram className={classes.icon} />
            </IconButton>
            <IconButton href="https://twitter.com/parrotsec">
              <Twitter className={classes.icon} />
            </IconButton>
            <IconButton href="https://www.facebook.com/ParrotSec/">
              <Facebook className={classes.icon} />
            </IconButton>
            <IconButton href="https://discord.gg/j7QTaCzAsm">
              <Discord className={classes.icon} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/company/parrotsec/about/">
              <LinkedIn className={classes.icon} />
            </IconButton>
            {/*
            <IconButton>
              <YouTube className={classes.icon} />
            </IconButton>
            <IconButton>
              <Twitch className={classes.icon} />
            </IconButton>
            */}
          </Box>
        </Paper>
      </Grid>
    </>
  )
}

export default SocialsSection
