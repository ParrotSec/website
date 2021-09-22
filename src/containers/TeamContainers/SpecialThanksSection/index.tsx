import { makeStyles, Grid, Typography, GridProps } from '@material-ui/core'
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
      justifyContent="space-around"
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
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          noAvatar
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          noAvatar
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          noAvatar
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          noAvatar
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          noAvatar
        />
        <UserCard
          name="Lorenzo Faletra"
          nickname="palinuro"
          role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
          noAvatar
        />
      </Grid>
    </Grid>
  )
}

export default SpecialThanks
