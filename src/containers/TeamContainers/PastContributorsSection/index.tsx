import React from 'react'
import { makeStyles, Grid, Typography, GridProps, Box, Paper } from '@material-ui/core'
import PButton from 'components/PButton'
import ContribCard from 'containers/TeamContainers/ContribCard'

const useStyles = makeStyles(theme => ({
  activeContrib: {
    marginTop: theme.spacing(10)
  },
  contribHeader: {
    textTransform: 'uppercase',
    marginBottom: 20
  },
  contribTitle: {
    marginTop: 0,
    marginBottom: 5
  },
  contribSubtitle: {
    marginTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(5)
  },
  contribSection: {
    marginTop: theme.spacing(7)
  },
  wideButton: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 10),
    border: `1px solid ${
      theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(3, 35, 46, 0.5)'
    }`,
    borderRadius: 24
  }
}))

const ActiveContributors = (props: GridProps) => {
  const classes = useStyles()

  return (
    <Grid {...props} className={classes.activeContrib} item xs={12} md={9} justifyContent="center">
      <Box
        className={classes.contribHeader}
        fontWeight={700}
        color="#05EEFF"
        letterSpacing="0.1em"
        textAlign="center"
      >
        <span style={{ fontWeight: 'bold' }}>past contributors</span>
      </Box>
      <Typography className={classes.contribTitle} variant="h1" align="center">
        Legacy Contributors
      </Typography>
      <Typography className={classes.contribSubtitle} variant="subtitle2" align="center">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        ParrotOS doesn't exist only thanks to the core team, but is also the result of the help of
        many <br /> contributors who improve the OS every day.
      </Typography>
      <Grid
        className={classes.contribSection}
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
      >
        <Paper className={classes.paper} elevation={0}>
          <Grid container justifyContent="center" spacing={3}>
            <ContribCard />
            <ContribCard />
            <ContribCard />
            <ContribCard />
            <ContribCard />
            <ContribCard />
          </Grid>
          <Grid container xs={12} justifyContent="center">
            <PButton className={classes.wideButton} variant="outlined" to="">
              View All Contributors
            </PButton>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ActiveContributors
