import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import OSSelection from 'containers/DownloadContainers/OSSelection'
import ContributeSection from 'containers/HomeContainers/ContributeSection'
import { SnackbarProvider } from 'notistack'
import 'react-image-lightbox/style.css'

const useStyles = makeStyles({
  contribute: {
    marginTop: 139
  },
  snackbar: {
    background: 'linear-gradient(99.16deg, #05EEFF 24.01%, #00FFF0 81.75%)',
    color: '#03232E',
    borderRadius: 16
  }
})

const Download = () => {
  const classes = useStyles()
  return (
    <SnackbarProvider preventDuplicate classes={{ variantSuccess: classes.snackbar }}>
      <Grid container justifyContent="center">
        <OSSelection />
        <ContributeSection className={classes.contribute} />
      </Grid>
    </SnackbarProvider>
  )
}

export default Download
