import { Grid, makeStyles } from '@material-ui/core'
import Wallpaper from 'assets/wallpaper.png'
import FeaturesSection from 'containers/HomeContainers/FeaturesSection'
import WelcomeSection from 'containers/HomeContainers/WelcomeSection'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DevelopingSection = dynamic(() => import('containers/HomeContainers/DevelopingSection'))
const HTBSection = dynamic(() => import('containers/HomeContainers/HTBSection'))
const ToolsSection = dynamic(() => import('containers/HomeContainers/ToolsSection'))
const ContributeSection = dynamic(() => import('containers/HomeContainers/ContributeSection'))
const OSSection = dynamic(() => import('containers/HomeContainers/OSSection'))
const TrustSection = dynamic(() => import('containers/HomeContainers/TrustSection'))
const StatsSection = dynamic(() => import('containers/HomeContainers/StatsSection'))
const NewsletterSection = dynamic(() => import('containers/HomeContainers/NewsletterSection'))

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
    fontSize: 30
  },
  wallpaper:
    theme.palette.type === 'dark'
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.1,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper.src}')`
        }
      : { display: 'none' },
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
  return (
    <Grid container className={classes.root} justifyContent="center">
      <div className={classes.wallpaper} />
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
