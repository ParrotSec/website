import React from 'react'
import { Grid, GridProps, makeStyles, Typography } from '@material-ui/core'
import Shell from 'containers/HomePageContainers/ContributeSection/assets/shell.svg'
import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  icon: {
    width: 32,
    height: 32,
    fill: theme.palette.type === 'light' ? '#FFFFFF' : '#06043E'
  },
  iconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.type === 'light' ? '#03232E' : '#FFFFFF',
    borderRadius: 6,
    marginBottom: 20
  }
}))

const ContributeSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <Grid container item xs={9} direction="column" alignItems="center" {...props}>
      <div className={classes.iconWrapper}>
        <Shell className={classes.icon} />
      </div>
      <Typography variant="h1" paragraph align="center">
        Develop for Parrot<span style={{ fontWeight: 300 }}>OS</span>
      </Typography>
      <Typography variant="body1" align="center">
        Different versions for different players, role your need and play freely.
      </Typography>
      <PButton variant="contained" to="/contribute" style={{ width: 165, marginTop: 37 }}>
        Learn More
      </PButton>
    </Grid>
  )
}

export default ContributeSection
