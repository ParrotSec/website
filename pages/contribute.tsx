import { CardActionArea, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'

import PFeatureBlock from 'components/PFeatureBlock'
import Github from 'containers/ContributeContainers/assets/github.svg'
import Gitlab from 'containers/ContributeContainers/assets/gitlab.svg'
import Milestone from 'containers/ContributeContainers/assets/milestone.svg'
import Todo from 'containers/ContributeContainers/assets/todo.svg'
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
  cardBorder: {
    borderRadius: 24
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
      <Grid container item xs={12} md={9} spacing={4} justifyContent="center">
        <Grid item sm={12} lg={6}>
          <CardActionArea
            className={classes.cardBorder}
            href="https://nest.parrotsec.org/org/parrot/-/blob/master/README.md"
          >
            <PFeatureBlock title="Public Todo list" Icon={Todo}>
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </CardActionArea>
        </Grid>
        <Grid item sm={12} lg={6}>
          <CardActionArea
            className={classes.cardBorder}
            href="https://nest.parrotsec.org/org/parrot/-/milestones"
          >
            <PFeatureBlock title="Milestones" Icon={Milestone}>
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </CardActionArea>
        </Grid>
        <Grid item sm={12} lg={6}>
          <CardActionArea className={classes.cardBorder} href="https://nest.parrotsec.org">
            <PFeatureBlock title="NEST - GitLab instance" Icon={Gitlab}>
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </CardActionArea>
        </Grid>
        <Grid item sm={12} lg={6}>
          <CardActionArea className={classes.cardBorder} href="https://github.com/parrotsec">
            <PFeatureBlock title="GitHub - backup mirror" Icon={Github}>
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </PFeatureBlock>
          </CardActionArea>
        </Grid>
      </Grid>
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Contribute
