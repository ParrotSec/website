import React from 'react'
import { makeStyles, Grid, Typography, GridProps } from '@material-ui/core'
import SpecialThanksCard from 'containers/TeamContainers/SpecialThanksCard'

const useStyles = makeStyles(theme => ({
  specialThanks: {
    marginTop: theme.spacing(20)
  },
  specialThanksTitle: {
    marginBottom: theme.spacing(5)
  },
}))

const SpecialThanks = (props: GridProps) => {
  const classes = useStyles()

  return (
    <Grid
      {...props}
      className={classes.specialThanks}
      container
      xs={9}
      justifyContent="space-around"
      spacing={5}
    >
      <Grid item xs={12} md={4}>
        <Typography variant="h1" className={classes.specialThanksTitle}>
          Special <br /> Thanks
        </Typography>
        <Typography variant="subtitle2">
          Compilers, interpreters and intelligent editors. All you need to start programming comes
          out of the box, with the most secure Linux environment.
        </Typography>
      </Grid>
      <Grid container item xs={12} md={8} direction="row" spacing={3}>
        <SpecialThanksCard />
        <SpecialThanksCard />
        <SpecialThanksCard />
        <SpecialThanksCard />
        <SpecialThanksCard />
        <SpecialThanksCard />
      </Grid>
    </Grid>
  )
}

export default SpecialThanks
