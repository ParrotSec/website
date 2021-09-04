import React from 'react'
import { Grid, GridProps, makeStyles, Paper, Typography } from '@material-ui/core'
import cls from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 16
  },
  paper: {
    width: '100%',
    padding: '74px 60px',
    ...(theme.palette.type === 'light'
      ? {
          background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)'
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
    <Grid
      className={cls(classes.root, className)}
      container
      {...rest}
      item
      xs={12}
      md={9}
      justifyContent="center"
    >
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
            <Typography variant="h3" paragraph>
              +2 million downloads
            </Typography>
            <Typography variant="body2">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" paragraph>
              +8k forum users
            </Typography>
            <Typography variant="body2">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h3" paragraph>
              17 Worldwide PoP
            </Typography>
            <Typography variant="body2">
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
