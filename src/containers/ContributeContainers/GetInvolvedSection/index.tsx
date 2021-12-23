import { CardActionArea, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

import PFeatureBlock from 'components/PFeatureBlock'
import Github from 'containers/ContributeContainers/assets/github.svg'
import Gitlab from 'containers/ContributeContainers/assets/gitlab.svg'
import Milestone from 'containers/ContributeContainers/assets/milestone.svg'
import Todo from 'containers/ContributeContainers/assets/todo.svg'

const useStyles = makeStyles(theme => ({
  cardBorder: {
    borderRadius: theme.spacing(3)
  }
}))

const GetInvolvedSection = () => {
  const classes = useStyles()

  return (
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
  )
}

export default GetInvolvedSection
