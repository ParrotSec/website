import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import OSSelection from 'containers/DownloadPageContainers/OSSelection'
import ContributeSection from 'containers/HomePageContainers/ContributeSection'
import DESection from 'containers/./DESection'

const useStyles = makeStyles({
  contribute: {
    marginTop: 139
  },
  desktopEnvironment: {
    marginTop: 64
  }
})

const Download = () => {
  const classes = useStyles()
  return (
    <Grid container justifyContent="center">
      <OSSelection />
      <DESection className={classes.desktopEnvironment} />
      <DESection className={classes.desktopEnvironment} />
      <DESection className={classes.desktopEnvironment} />
      <ContributeSection className={classes.contribute} />
    </Grid>
  )
}

export default Download
