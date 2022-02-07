import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import FeaturesSection from 'containers/HomeContainers/FeaturesSection'
import HackToolsSection from 'containers/HomeContainers/HackToolsSection'
import WelcomeSection from 'containers/HomeContainers/WelcomeSection'

const DevelopingSection = dynamic(() => import('containers/HomeContainers/DevelopingSection'))
const HTBSection = dynamic(() => import('containers/HomeContainers/HTBSection'))
const ToolsSection = dynamic(() => import('containers/HomeContainers/ToolsSection'))
const ContributeSection = dynamic(() => import('containers/HomeContainers/ContributeSection'))
const OSSection = dynamic(() => import('containers/HomeContainers/OSSection'))
const TrustSection = dynamic(() => import('containers/HomeContainers/TrustSection'))
const StatsSection = dynamic(() => import('containers/HomeContainers/StatsSection'))
/*
const NewsletterSection = dynamic(() => import('containers/HomeContainers/NewsletterSection'))
*/

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
    fontSize: 30
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
    marginTop: 90
  },
  statsBlock: {
    marginTop: 217,
    [theme.breakpoints.down('sm')]: {
      marginTop: 116
    }
  },
  htbBlock: {
    marginTop: 32
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
  return (
    <Grid container className={classes.root} justifyContent="center">
      <WelcomeSection />
      <ToolsSection className={classes.toolsBlock} />
      <TrustSection className={classes.trustBlock} />
      <FeaturesSection className={classes.features} />
      <HackToolsSection />
      <DevelopingSection />
      <StatsSection className={classes.statsBlock} />
      <OSSection />
      <HTBSection className={classes.htbBlock} />
      <ContributeSection className={classes.developBlock} />
      {/*<NewsletterSection className={classes.newsletterBlock} />*/}
    </Grid>
  )
}

export default Index
