import React from 'react'
import { Grid, GridProps, makeStyles, Typography } from '@material-ui/core'
import Oreo from './assets/oreo 1.svg'

const useStyles = makeStyles(theme => ({
  trustLogosBlock: {
    marginTop: 40
  },
  img: {
    display: 'block',
    margin: 'auto',
    fill: theme.palette.type === 'light' ? 'white' : 'inherit',
    '& #oreo_1_svg__path1': {
      stroke: theme.palette.type === 'light' ? '#03232E' : '#FFF'
    },
    '& #oreo_1_svg__path2': {
      fill: theme.palette.type === 'light' ? '#03232E' : '#FFF'
    }
  }
}))

const TrustSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <Grid {...props} container justifyContent="center" alignItems="center" item xs={10}>
      <Grid item xs={10}>
        <Typography variant="body2" align="center">
          Trusted by cybersecurity professionals around the world
        </Typography>
      </Grid>
      <Grid
        className={classes.trustLogosBlock}
        container
        item
        xs={10}
        md={8}
        spacing={4}
        justifyContent="center"
      >
        <Grid item xs={6} md={4} lg={2}>
          <Oreo className={classes.img} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Oreo className={classes.img} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Oreo className={classes.img} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Oreo className={classes.img} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Oreo className={classes.img} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Oreo className={classes.img} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TrustSection
