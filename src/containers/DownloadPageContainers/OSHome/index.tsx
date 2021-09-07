import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import cls from 'classnames'
import Home from 'containers/HomePageContainers/OSSection/assets/Home.svg'
import DESection from 'containers/DownloadPageContainers/DESection'

const useStyles = makeStyles(theme => ({
  home: {
    background: 'linear-gradient(153.43deg, #03F0FF 16.67%, #03FF77 100%)'
  },
  desktopEnvironment: {
    marginTop: theme.spacing(8)
  }
}))

type OSHomeProps = { classesGeneral: Record<'headerIcon' | 'iconHolder' | 'gridHeader', string> }

const OSHome = ({ classesGeneral }: OSHomeProps) => {
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
            <div className={cls(classesGeneral.iconHolder, classes.home)}>
              <Home className={classesGeneral.headerIcon} />
            </div>
            <Typography variant="h2">Home Edition</Typography>
          </Box>
          <Box marginTop="12px">
            <Typography variant="subtitle2" align="center">
              Home edition is designed for <b>daily use</b>, <b>privacy</b> and{' '}
              <b>software development</b>. Parrot Tools can be manually installed to assemble a
              custom and lightweight pentesting environment.
            </Typography>
          </Box>
        </Grid>
        <DESection
          className={classes.desktopEnvironment}
          requirements={[
            { heading: 'Processor', description: 'Intel Core i5 or equivalent' },
            { heading: 'Graphics', description: 'No Graphical Acceleration Required' },
            { heading: 'Memory', description: '8 GB RAM' },
            { heading: 'Storage', description: '16 GB available space' }
          ]}
          features={[
            {
              hero: 'Workspace',
              content: [
                {
                  heading: 'iCloud Private Relay',
                  description: (
                    <>
                      iCloud Private Relay is a service that lets you connect to virtually any
                      network and browse with Safari in an even more secure and private way.
                    </>
                  )
                },
                {
                  heading: 'Hide My Email',
                  description: (
                    <>
                      Hide My Email allows you to create unique, random email addresses that forward
                      to your personal inbox.{' '}
                    </>
                  )
                }
              ]
            },
            {
              hero: 'Accessibility',
              content: [
                {
                  heading: 'iCloud Private Relay',
                  description: (
                    <>
                      iCloud Private Relay is a service that lets you connect to virtually any
                      network and browse with Safari in an even more secure and private way.
                    </>
                  )
                },
                {
                  heading: 'Hide My Email',
                  description: (
                    <>
                      Hide My Email allows you to create unique, random email addresses that forward
                      to your personal inbox.{' '}
                    </>
                  )
                }
              ]
            }
          ]}
        />
        <DESection className={classes.desktopEnvironment} />
        <DESection className={classes.desktopEnvironment} />
      </Grid>
    </>
  )
}

export default OSHome
