import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import ContributeSection from 'containers/HomeContainers/ContributeSection'
import CollaborationSection from 'containers/PartnersContainers/CollaborationsSection'
import HTBSection from 'containers/PartnersContainers/HTBSection'
import MirrorsSection from 'containers/PartnersContainers/MirrorsSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    marginTop: 10,
    paddingBottom: 20
  },
  headingSubTitle: {
    marginTop: 15,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
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
    <Grid container item xs={12} className={classes.root} justifyContent="center">
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
      <CollaborationSection />
      <MirrorsSection />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Partners
