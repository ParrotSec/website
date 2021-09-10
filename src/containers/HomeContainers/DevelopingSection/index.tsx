import React from 'react'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  developerBlock: {
    marginTop: 115
  },
  papersBlock: {
    marginTop: 66
  },
  devPaper: {
    padding: `${theme.spacing(9)}px ${theme.spacing(8)}px`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4)
    }
  }
}))

const DevelopingSection = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.developerBlock} container item xs={9} md={6}>
        <Typography variant="h1" align="center" paragraph>
          Parrot is developer friendly. Secure in a Linux Environment.
        </Typography>
        <Typography variant="body1" align="center">
          Compilers, interpreters and intelligent editors. All you need to start programming comes
          out of the box, with the most secure Linux environment.
        </Typography>
      </Grid>
      <Grid className={classes.papersBlock} container item xs={12} md={9} spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.devPaper} elevation={0}>
            <Typography variant="h3" paragraph>
              Developer tools
            </Typography>
            <Typography variant="body1">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.devPaper} elevation={0}>
            <Typography variant="h3" paragraph>
              Compilers & interpreters
            </Typography>
            <Typography variant="body1">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default DevelopingSection
