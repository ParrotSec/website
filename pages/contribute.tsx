import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import GetInvolvedSection from 'containers/ContributeContainers/GetInvolvedSection'
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

const Contribute: NextPage = () => {
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
          Contribute to the Parrot Project
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
          ParrotOS was born as a fully open source project, anyone can see what is inside.
        </Typography>
      </Grid>
      <GetInvolvedSection />
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Contribute
