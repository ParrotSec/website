import { CardActionArea, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import HTBWallpaper from 'assets/htb_community.png'

const useStyles = makeStyles(theme => ({
  mainSponsorPaper: {
    color: '#FFFFFF',
    minHeight: '55vh',
    padding: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${HTBWallpaper.src}')`
        : `url('${HTBWallpaper.src}')`
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
      <CardActionArea className={classes.actionArea} href="https://hackthebox.eu">
        <Paper className={classes.mainSponsorPaper} elevation={0}>
          <Typography variant="h5">Main sponsor</Typography>
          <Typography variant="h2" gutterBottom>
            Hack The Box
          </Typography>
          <Typography variant="body1">
            Hack The Box is an online platform providing labs and challenges for cyber security
            training. Users can improve their penetration testing skills and exchange ideas and
            methodologies with thousands of people in the security field. By employing several
            social and gamification elements Hack The Box makes the learning experience fun and
            rewarding.
          </Typography>
        </Paper>
      </CardActionArea>
    </Grid>
  )
}

export default HTBSection
