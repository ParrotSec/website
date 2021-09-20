import { Grid, makeStyles, Typography } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import Wallpaper from 'assets/wallpaper.png'
import DonateSection from 'containers/DonateContainers/DonateSection'
import { NextPage } from 'next'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper}')`
  },
  headingTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(7)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(5)
    }
  },
  headingSubTitle: {
    marginTop: 27,
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 15.3
    },
    marginBottom: theme.spacing(6.5)
  },
  donate: {
    marginTop: 88,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  snackbar: {
    background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    color: '#03232E',
    borderRadius: 16
  }
}))

const Donate: NextPage = () => {
  const classes = useStyles()
  return (
    <SnackbarProvider preventDuplicate classes={{ variantSuccess: classes.snackbar }}>
      <Grid container className={classes.root} justifyContent="center">
        <Grid
          item
          container
          xs={10}
          justifyContent="center"
          alignItems="center"
          direction="column"
          wrap="nowrap"
        >
          <Typography className={classes.headingTitle} variant="h1" align="center">
            Buy Us A Coffee
          </Typography>
          <Typography className={classes.headingSubTitle} variant="subtitle2" align="center">
            A GNU/Linux distribution based on Debian and designed with Security and Privacy in mind.
          </Typography>
        </Grid>
        <DonateSection className={classes.donate} />
      </Grid>
    </SnackbarProvider>
  )
}

export default Donate
