import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import cls from 'classnames'

import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  },
  gridHrMarginTop: {
    marginTop: 30,
    marginBottom: 30
  },
  image: {
    display: 'block',
    margin: 'auto',
    paddingBottom: theme.spacing(2)
  }
}))

const OSCloud = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container justifyContent="center">
        <Paper className={cls(classes.root, classes.desktopEnvironment)} elevation={0}>
          <Typography variant="h4" paragraph>
            Cloud Editions
          </Typography>
          <Typography variant="subtitle2Semi" paragraph>
            Cloud Appliances are special editions of Parrot Security made for embedded devices,
            cloud environments, virtual machines and other special deployments.
          </Typography>
          <Grid container justifyContent="center" spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={12} md={8} justifyContent="center">
              <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                <Typography variant="h6">Architect Edition</Typography>
                <Typography variant="body1Semi">
                  ParrotOS with nothing pre-installed. Install any software and DE with this
                  edition.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} justifyContent="center">
              <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                <PButton gradient variant="contained" to="/download/?version=architect">
                  Download
                </PButton>
              </Box>
            </Grid>
          </Grid>
          <Grid className={classes.gridHrMarginTop} item xs={12}>
            <Divider variant="fullWidth" />
          </Grid>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} md={8} justifyContent="center">
              <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                <Typography variant="h6">Docker images</Typography>
                <Typography variant="body1Semi">
                  ParrotOS for Docker enables users to take advantage of the Parrot tools on top of
                  other operating systems or in cloud environments.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} justifyContent="center">
              <Box display="flex" flexDirection="column" style={{ gap: 10 }}>
                <PButton
                  gradient
                  variant="contained"
                  to="https://parrotsec.org/docs/cloud/parrot-on-docker"
                >
                  Check it out
                </PButton>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default OSCloud
