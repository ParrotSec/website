import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Wallpaper from '../assets/wallpaper.png'
import ToolsSection from 'containers/HomePageContainers/ToolsSection'
import HTBSection from 'containers/HomePageContainers/HTBSection'
import WelcomeSection from 'containers/HomePageContainers/WelcomeSection'
import FeaturesSection from 'containers/HomePageContainers/FeaturesSection'
import TrustSection from 'containers/HomePageContainers/TrustSection'
import DevelopingSection from 'containers/HomePageContainers/DevelopingSection'
import StatsSection from 'containers/HomePageContainers/StatsSection'
import OSSection from 'containers/HomePageContainers/OSSection'
import { useCookies } from 'react-cookie'
import ContributeSection from 'containers/HomePageContainers/ContributeSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
    fontSize: 30
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
  features: {
    marginTop: 130,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  trustBlock: {
    marginTop: 90
  },
  trustLogosBlock: {
    marginTop: 40
  },
  toolsBlock: {
    marginTop: 90,
    paddingLeft: 16,
    paddingRight: 16
  },
  statsBlock: {
    marginTop: 217,
    [theme.breakpoints.down('sm')]: {
      marginTop: 116
    }
  },
  htbBlock: {
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16
  },
  developBlock: {
    marginTop: 154
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 21
  }
}))

const Index = () => {
  const classes = useStyles()
  const [cookies] = useCookies()
  return (
    <Grid container className={classes.root} justifyContent="center">
      {cookies.theme === 'dark' && <div className={classes.wallpaper} />}
      <WelcomeSection />
      <FeaturesSection className={classes.features} />
      <TrustSection className={classes.trustBlock} />
      <ToolsSection className={classes.toolsBlock} />
      <DevelopingSection />
      <StatsSection className={classes.statsBlock} />
      <OSSection />
      <HTBSection className={classes.htbBlock} />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Index
