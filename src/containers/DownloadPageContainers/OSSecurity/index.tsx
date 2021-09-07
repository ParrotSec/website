import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import cls from 'classnames'
import Security from 'containers/HomePageContainers/OSSection/assets/Security.svg'
import DESection from 'containers/DownloadPageContainers/DESection'

const useStyles = makeStyles(theme => ({
  security: {
    background: 'linear-gradient(145.47deg, #FAFD50 21.97%, #FD50D7 96.3%)'
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

type OSSecurityProps = {
  classesGeneral: Record<'headerIcon' | 'iconHolder' | 'gridHeader', string>
}

const OSSecurity = ({ classesGeneral }: OSSecurityProps) => {
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
            <div className={cls(classesGeneral.iconHolder, classes.security)}>
              <Security className={classesGeneral.headerIcon} />
            </div>
            <Typography variant="h2">Security Edition</Typography>
          </Box>
          <Box marginTop="12px">
            <Typography variant="subtitle2" align="center">
              Security Edition is a special purpose operating system designed for{' '}
              <b>Penetration Testing</b> and
              <b>Red Team operations</b>. It contains a full arsenal of ready-to use pentesting
              tools.
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

export default OSSecurity
