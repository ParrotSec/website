import { CardActionArea, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import HTBCube from 'assets/partners/hackthebox/htb-cube.svg'
import HTBWallpaper from 'assets/partners/hackthebox/htb-wallpaper.png'

const useStyles = makeStyles(theme => ({
  mainSponsorPaper: {
    color: '#FFFFFF',
    minHeight: '45vh',
    padding: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url('${HTBWallpaper.src}')`
  },
  mainSponsorTitle: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    }
  },
  actionArea: {
    display: 'flex',
    borderRadius: 24,
    marginTop: theme.spacing(2)
  }
}))

const HTBSection = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={12} md={9} alignItems="center" justifyContent="center" wrap="nowrap">
      <CardActionArea className={classes.actionArea} href="https://hackthebox.com/?ref=parrotsec">
        <Paper className={classes.mainSponsorPaper} elevation={0}>
          <Typography variant="h5">Main sponsor</Typography>
          <Grid container>
            <Grid container item sm={6} xs={12}>
              <Typography variant="h2" className={classes.mainSponsorTitle}>
                Hack The Box
              </Typography>
              <Typography variant="body1">
                Hack The Box is an online platform providing labs and challenges for cyber security
                training. Users can improve their penetration testing skills and exchange ideas and
                methodologies with thousands of people in the security field. By employing several
                social and gamification elements Hack The Box makes the learning experience fun and
                rewarding.
              </Typography>
            </Grid>
            <Grid container item sm={6} xs={12}>
              <HTBCube />
            </Grid>
          </Grid>
        </Paper>
      </CardActionArea>
    </Grid>
  )
}

export default HTBSection
