import React from 'react'
import { makeStyles, Grid, Typography, Card, CardContent, GridProps } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  nicknameTextColor: {
    color: '#05EEFF',
    opacity: 1
  },
  specialThanksCard: {
    margin: theme.spacing(1)
  },
  specialThanksRole: {
    marginTop: theme.spacing(2)
  }
}))

const SpecialThanksCard = (props: GridProps) => {
  const classes = useStyles()

  return (
    <Grid {...props} item xs={12} md={6}>
      <Card elevation={0}>
        <CardContent className={classes.specialThanksCard}>
          <Typography variant="h5" component="h2">
            Name
          </Typography>
          <Typography className={classes.nicknameTextColor}>nickname</Typography>
          <Typography className={classes.specialThanksRole}>Role</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SpecialThanksCard
