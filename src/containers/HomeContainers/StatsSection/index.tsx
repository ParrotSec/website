import { Grid, GridProps, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import gradientOffset from '../../../../lib/gradient'

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5)
    },
    ...(theme.palette.mode === 'light'
      ? {
          background: `linear-gradient(99.16deg, ${
            theme.palette.primary.main
          } 24.01%, ${gradientOffset(theme.palette.primary.main)} 81.75%)`
        }
      : {})
  },
  contentGrid: {
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(3),
      margin: 0
    }
  },
  subtitle: {
    paddingBottom: theme.spacing(5)
  }
}))

const StatsSection = ({ className, ...rest }: GridProps) => {
  const classes = useStyles()
  return (
    <Grid className={className} container {...rest} item xs={12} md={9} justifyContent="center">
      <Grid container justifyContent="center" xs={12} md={9}>
        <Typography variant="h2" align="center" gutterBottom>
          The Parrot Project
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle2Semi" align="center">
          First release in 10 June 2013, its fame has increased since then thanks to its features,
          tools and community support.
          <br />
        </Typography>
      </Grid>
      <Paper className={classes.paper} elevation={0}>
        <Grid
          className={classes.contentGrid}
          container
          item
          xs={12}
          justifyContent="center"
          direction="column"
          spacing={2}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" paragraph>
              +35 millions downloads in the last five years
            </Typography>
            <Typography variant="body2Semi">
              Every day more and more new people download and update the system. This OS is made to
              respect your freedom, and it ever will be. share with anyone, read the source code and
              change it as you want!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" paragraph>
              +200k unique users
            </Typography>
            <Typography variant="body2Semi">
              A vast community, spread all over the world, used by experts but also by beginners.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" paragraph>
              +60 worldwide mirrors
            </Typography>
            <Typography variant="body2Semi">
              ParrotOS continues to grow thanks also to its collaborations, with various
              universities, organizations, companies and more.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default StatsSection
