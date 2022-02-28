import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { NextPage } from 'next'
import { SnackbarProvider } from 'notistack'

import DonateSection from 'containers/DonateContainers/DonateSection'
import StoreSection from 'containers/DonateContainers/StoreSection'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  headingSubTitle: {
    marginTop: theme.spacing(1),
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
    color: theme.palette.text.primary,
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
          <Typography variant="h1" align="center" paragraph>
            Buy Us A Coffee
          </Typography>
          <Typography className={classes.headingSubTitle} variant="subtitle2Semi" align="center">
            The ultimate framework for your Cyber Security operations
          </Typography>
        </Grid>
        <DonateSection className={classes.donate} />
        <StoreSection />
      </Grid>
    </SnackbarProvider>
  )
}

export default Donate
