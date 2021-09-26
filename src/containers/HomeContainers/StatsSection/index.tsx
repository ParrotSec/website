import { Grid, GridProps, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import gradientOffset from '../../../../lib/gradient'

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: '74px 60px',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4)
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
    [theme.breakpoints.down('xs')]: {
      margin: 0
    }
  }
}))

const StatsSection = ({ className, ...rest }: GridProps) => {
  const classes = useStyles()
  return (
    <Grid className={className} container {...rest} item xs={12} md={9} justifyContent="center">
      <Paper className={classes.paper} elevation={0}>
        <Grid
          className={classes.contentGrid}
          container
          item
          xs={12}
          justifyContent="center"
          spacing={4}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" paragraph>
              +2 million downloads
            </Typography>
            <Typography variant="body2Semi">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" paragraph>
              +8k forum users
            </Typography>
            <Typography variant="body2Semi">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" paragraph>
              17 Worldwide PoP
            </Typography>
            <Typography variant="body2Semi">
              This system is made to respect your freedom, and it ever will be. share with anyone,
              read the source code and change it as you want!
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default StatsSection
