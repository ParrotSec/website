import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import OSSelection from 'containers/DownloadPageContainers/OSSelection'
import ContributeSection from 'containers/HomePageContainers/ContributeSection'
import { SnackbarProvider } from 'notistack'
import 'react-image-lightbox/style.css'

const useStyles = makeStyles({
  contribute: {
    marginTop: 139
  }
})

const Download = () => {
  const classes = useStyles()
  return (
    <SnackbarProvider>
      <Grid container justifyContent="center">
        <OSSelection />
        <ContributeSection className={classes.contribute} />
      </Grid>
    </SnackbarProvider>
  )
}

export default Download
