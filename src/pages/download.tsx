import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import OSSelection from 'containers/DownloadPageContainers/OSSelection'
import ContributeSection from 'containers/HomePageContainers/ContributeSection'

const useStyles = makeStyles({
  contribute: {
    marginTop: 139
  }
})

const Download = () => {
  const classes = useStyles()
  return (
    <Grid container justifyContent="center">
      <OSSelection />

      <ContributeSection className={classes.contribute} />
    </Grid>
  )
}

export default Download
