import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import ContributeSection from 'containers/HomeContainers/ContributeSection'
import CollaborationSection from 'containers/PartnersContainers/CollaborationsSection'
import HTBSection from 'containers/PartnersContainers/HTBSection'
import MirrorsSection from 'containers/PartnersContainers/MirrorsSection'
import SponsorSection from 'containers/PartnersContainers/SponsorSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    paddingBottom: 20
  },
  headingSubTitle: {
    marginTop: theme.spacing(2),
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 16
    },
    marginBottom: theme.spacing(6.5)
  },
  developBlock: {
    marginTop: 154
  }
}))

const Partners: NextPage = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid
        container
        direction="column"
        className={classes.title}
        item
        xs={12}
        justifyContent="center"
      >
        <Typography variant="h1" align="center" paragraph>
          Our Partners
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          All companies and organizations that have decided to invest in the project.
        </Typography>
      </Grid>
      <HTBSection />
      <SponsorSection />
      <CollaborationSection />
      <MirrorsSection />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Partners
