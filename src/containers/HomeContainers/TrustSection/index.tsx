import React from 'react'
import { Grid, GridProps, makeStyles, Typography } from '@material-ui/core'
import Oreo from './assets/oreo 1.svg'

const useStyles = makeStyles(theme => ({
  trustLogosBlock: {
    marginTop: 40
  },
  img: {
    width: '100%',
    height: 'auto',
    maxWidth: 113,
    maxHeight: 40,
    display: 'block',
    margin: 'auto',
    fill: theme.palette.type === 'light' ? 'white' : 'inherit',
    '& #path1': {
      stroke: theme.palette.type === 'light' ? '#03232E' : '#FFF'
    },
    '& #path2': {
      fill: theme.palette.type === 'light' ? '#03232E' : '#FFF'
    }
  }
}))

const TrustSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <Grid {...props} container justifyContent="center" alignItems="center" item xs={10}>
      <Grid item xs={10}>
        <Typography variant="body1" align="center" style={{ opacity: 1 }}>
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
