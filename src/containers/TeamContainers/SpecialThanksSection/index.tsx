import { Grid, Typography, GridProps } from '@mui/material'
import { makeStyles } from '@mui/styles'

import specialthanks from './specialthanks'

import UserCard from 'components/UserCard'

const useStyles = makeStyles(theme => ({
  specialThanks: {
    marginTop: theme.spacing(15)
  },
  specialThanksTitle: {
    marginBottom: theme.spacing(5)
  },
  specialThanksSubtitle: {
    marginBottom: theme.spacing(5)
  }
}))

const specialThanksData = specialthanks.map((data, i) => (
  <UserCard key={`id-${i}`} name={data.name} role={data.role} noAvatar={data.avatar} />
))

const SpecialThanks = (props: GridProps) => {
  const classes = useStyles()

  return (
    <Grid
      {...props}
      className={classes.specialThanks}
      container
      item
      xs={10}
      md={9}
      justifyContent="space-between"
    >
      <Grid item xs={12} md={3}>
        <Typography variant="h1" className={classes.specialThanksTitle}>
          Special Thanks
        </Typography>
        <Typography variant="subtitle2" className={classes.specialThanksSubtitle}>
          Compilers, interpreters and intelligent editors. All you need to start programming comes
          out of the box, with the most secure Linux environment.
        </Typography>
      </Grid>
      <Grid container item xs={12} md={8} direction="row" spacing={3}>
        {specialThanksData}
      </Grid>
    </Grid>
  )
}

export default SpecialThanks
