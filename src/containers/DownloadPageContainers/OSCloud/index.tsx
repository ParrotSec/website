import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import cls from 'classnames'
import Cloud from 'containers/HomePageContainers/OSSection/assets/Cloud.svg'
import DESection from 'containers/DownloadPageContainers/DESection'

const useStyles = makeStyles(theme => ({
  cloud: {
    background: 'linear-gradient(146.41deg, #00D1FF 8.11%, #020DFF 94.7%)'
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

type OSCloudProps = {
  classesGeneral: Record<'headerIcon' | 'iconHolder' | 'gridHeader', string>
}

const OSCloud = ({ classesGeneral }: OSCloudProps) => {
  const classes = useStyles()
  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          className={classesGeneral.gridHeader}
          container
          item
          xs={8}
          lg={6}
          justifyContent="center"
        >
          <Box display="flex">
            <div className={cls(classesGeneral.iconHolder, classes.cloud)}>
              <Cloud className={classesGeneral.headerIcon} />
            </div>
            <Typography variant="h2">Cloud Edition</Typography>
          </Box>
          <Box marginTop="12px">
            <Typography variant="subtitle2" align="center">
              IoT & Cloud Appliances are special editions of Parrot Security made for{' '}
              <b>embedded devices</b>,<b>cloud environments</b>, <b>virtual machines</b> and other special
              deployments.
            </Typography>
          </Box>
        </Grid>
        <DESection className={classes.desktopEnvironment} />
        <DESection className={classes.desktopEnvironment} />
        <DESection className={classes.desktopEnvironment} />
      </Grid>
    </>
  )
}

export default OSCloud
