import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import Wallpaper from 'assets/wallpaper.png'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import TeamCard from 'containers/TeamContainers/TeamCard'
import ActiveContributors from 'containers/TeamContainers/ActiveContributorsSection'
import SpecialThanks from 'containers/TeamContainers/SpecialThanksSection'
import PastContributors from 'containers/TeamContainers/PastContributorsSection'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    marginTop: 10,
    paddingBottom: 20
  },
  headingSubTitle: {
    marginTop: 27,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper}')`
  },
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
  developBlock: {
    marginTop: 154
  }
}))

const Team = () => {
  const classes = useStyles()
  const [cookies] = useCookies()

  return (
    <Grid container xs={12} className={classes.root} justifyContent="center">
      {cookies.theme === 'dark' && <div className={classes.wallpaper} />}
      <Grid className={classes.title} item xs={12} justifyContent="center">
        <Typography className={classes.headingTitle} variant="h1" align="center">
          The Team <br /> behind Parrot<span style={{ fontWeight: 300 }}>OS</span>
        </Typography>
        <Typography className={classes.headingSubTitle} variant="body1" align="center">
          A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
        </Typography>
      </Grid>
      <Grid container xs={12} md={9} spacing={4}>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </Grid>
      <ActiveContributors />
      <SpecialThanks />
      <PastContributors />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Team
