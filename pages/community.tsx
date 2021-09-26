import { Grid, Typography } from '@mui/material'
import Wallpaper from 'assets/wallpaper.png'
import SocialsSection from 'containers/CommunityContainers/SocialsSection'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import { NextPage } from 'next'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  wallpaper:
    theme.palette.mode === 'dark'
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
  headingSubTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(6.5)
  },
  features: {
    marginTop: 88,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  developBlock: {
    marginTop: 154
  }
}))

const Community: NextPage = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <div className={classes.wallpaper} />
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography variant="h1" align="center" paragraph>
          Join the Parrot Community
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2" align="center">
          A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
        </Typography>
      </Grid>
      <SocialsSection className={classes.features} />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Community
