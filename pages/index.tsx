import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { useCookie } from 'react-use'
import Wallpaper from 'assets/wallpaper.png'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import DevelopingSection from 'containers/HomeContainers/DevelopingSection'
import FeaturesSection from 'containers/HomeContainers/FeaturesSection'
import HTBSection from 'containers/HomeContainers/HTBSection'
import NewsletterSection from 'containers/HomeContainers/NewsletterSection'
import OSSection from 'containers/HomeContainers/OSSection'
import StatsSection from 'containers/HomeContainers/StatsSection'
import ToolsSection from 'containers/HomeContainers/ToolsSection'
import TrustSection from 'containers/HomeContainers/TrustSection'
import WelcomeSection from 'containers/HomeContainers/WelcomeSection'
import { NextPage } from 'next'

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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  statsBlock: {
    marginTop: 217,
    [theme.breakpoints.down('sm')]: {
      marginTop: 116
    }
  },
  htbBlock: {
    marginTop: 32,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  developBlock: {
    marginTop: 154
  },
  iconHolder: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 21
  },
  newsletterBlock: {
    marginTop: 120
  }
}))

const Index: NextPage = () => {
  const classes = useStyles()
  const [theme] = useCookie('theme')
  return (
    <Grid container className={classes.root} justifyContent="center">
      {theme === 'dark' && <div className={classes.wallpaper} />}
      <WelcomeSection />
      <FeaturesSection className={classes.features} />
      <TrustSection className={classes.trustBlock} />
      <ToolsSection className={classes.toolsBlock} />
      <DevelopingSection />
      <StatsSection className={classes.statsBlock} />
      <OSSection />
      <HTBSection className={classes.htbBlock} />
      <ContributeSection className={classes.developBlock} />
      <NewsletterSection className={classes.newsletterBlock} />
    </Grid>
  )
}

export default Index
