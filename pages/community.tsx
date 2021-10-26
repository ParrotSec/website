import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import SocialsSection from 'containers/CommunityContainers/SocialsSection'
import ContributeSection from 'containers/HomeContainers/ContributeSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
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
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          The ultimate framework for your Cyber Security operations
        </Typography>
      </Grid>
      <SocialsSection className={classes.features} />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Community
