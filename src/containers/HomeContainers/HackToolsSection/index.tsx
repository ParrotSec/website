import { Box, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import screenshot from './assets/parrot-desktop-5.1.png'

const useStyles = makeStyles(theme => ({
  paperPadding: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  }
}))

const HackToolsSection = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={4} item xs={12} md={9} style={{ marginTop: 32 }}>
        <Grid container item xs={12} md={12}>
          <Paper elevation={0}>
            <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
              <div className={classes.paperPadding}>
                <Typography variant="h4" paragraph>
                  Hacking tools at your fingertips
                </Typography>
                <Typography variant="body1Semi">
                  You can install your favorite tools on top of any Linux system, but it is
                  time-comsuming, prone to errors and hard to keep updated over time. Parrot gives
                  you the convenience of a familiar Debian environment with all the tools you will
                  ever need. We regularly update, test and pack them for you.
                  <br />
                  Having a bunch of git clones thrown at your desktop is something of the past. We
                  do the hard work, <b>not you</b>.
                </Typography>
              </div>
              <img
                src={screenshot.src}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  maxWidth: '90%'
                }}
                alt="Parrot Tools"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default HackToolsSection
