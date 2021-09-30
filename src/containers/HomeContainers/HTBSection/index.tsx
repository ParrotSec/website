import { Grid, GridProps, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import HTBLogo from './assets/htbLogo.svg'
import htbScreenshot from './assets/htbScreenshot.webp'

import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 71,
    width: '100%'
  },
  htbIcon: {
    marginRight: 'auto',
    marginBottom: 31,
    width: '100%',
    height: 'auto',
    maxWidth: 249,
    maxHeight: 49,
    fill: theme.palette.mode === 'light' ? '#141D2B' : '#FFFFFF'
  },
  desc: {
    opacity: 0.5
  },
  bigIcon: {
    width: 84,
    height: 84,
    padding: 16,
    background: '#FFF',
    borderRadius: 6
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    paddingBottom: 78
  }
}))

const HTBSection = (rest: GridProps) => {
  const classes = useStyles()
  return (
    <Grid {...rest} container item xs={12} md={9}>
      <Paper className={classes.root} elevation={0}>
        <Grid container item xs justifyContent="space-between">
          <Grid className={classes.content} container item xs={12} lg={4} direction="column">
            <HTBLogo className={classes.htbIcon} />
            <Typography variant="h3" paragraph>
              Parrot<span style={{ fontWeight: 300 }}>OS</span> now web-based through Hack The Box
            </Typography>
            <Typography className={classes.desc} variant="body1" paragraph>
              Pwnbox is a completely browser accessible virtual hacking distro including everything
              a hacker’s operating system should have.
            </Typography>
            <PButton variant="contained" to="https://hackthebox.eu/" style={{ maxWidth: 165 }}>
              Explore
            </PButton>
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <img
              src={htbScreenshot.src}
              alt="Screenshot of PWNBox"
              style={{ paddingLeft: '10%' }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default HTBSection
