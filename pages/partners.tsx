import { Grid, Typography, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'
import ContributeSection from 'containers/HomeContainers/ContributeSection'

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
  },
  paper: {
    padding: theme.spacing(5)
  }
}))

const Team: NextPage = () => {
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
      <Grid container xs={12}>
        <Grid item container xs={6} alignItems="center" justifyContent="center" wrap="nowrap">
          <Paper className={classes.paper} elevation={0}>
            <Typography variant="h5">Main sponsor</Typography>
            <Typography variant="h2">Hack The Box</Typography>
            <Typography variant="body1">
              Hack The Box is an online platform providing labs and challenges for cyber security
              training. Users can improve their penetration testing skills and exchange ideas and
              methodologies with thousands of people in the security field. By employing several
              social and gamification elements Hack The Box makes the learning experience fun and
              rewarding.
            </Typography>
          </Paper>
        </Grid>
        <Grid item container xs={4} justifyContent="center" alignItems="center" direction="column">
          <Paper className={classes.paper} elevation={0}>
            <Typography variant="h2">Collaborations</Typography>
            <Paper className={classes.paper} elevation={2}>
              <Typography variant="h4">Collaborations</Typography>
            </Paper>
            <Paper className={classes.paper} elevation={2}>
              <Typography variant="h4">Collaborations</Typography>
            </Paper>
            <Paper className={classes.paper} elevation={2}>
              <Typography variant="h4">Collaborations</Typography>
            </Paper>
            <Paper className={classes.paper} elevation={2}>
              <Typography variant="h4">Collaborations</Typography>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
      <ContributeSection className={classes.developBlock} />
    </Grid>
  )
}

export default Team
